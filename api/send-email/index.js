const fetch = require("node-fetch");

// ---- Rate limiting simple en mémoire (par instance de Function) ----
// Pour un formulaire de contact classique c'est suffisant.
// Si besoin de plus robuste plus tard : Azure Table Storage ou Redis.
const requestLog = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 2;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = requestLog.get(ip) || { count: 0, windowStart: now };

  if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0;
    entry.windowStart = now;
  }

  entry.count += 1;
  requestLog.set(ip, entry);

  // Nettoyage périodique pour éviter fuite mémoire
  if (requestLog.size > 5000) {
    for (const [key, val] of requestLog) {
      if (now - val.windowStart > RATE_LIMIT_WINDOW_MS) requestLog.delete(key);
    }
  }

  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

// ---- Validation ----
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = {
  name: 100,
  email: 150,
  company: 150,
  eventType: 50,
  message: 2000,
};

function validate(body) {
  const errors = [];
  const { name, email, company, eventType, message } = body || {};

  if (!name || typeof name !== "string" || name.trim().length === 0)
    errors.push("name");
  else if (name.length > MAX_LENGTHS.name) errors.push("name_too_long");

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email))
    errors.push("email");
  else if (email.length > MAX_LENGTHS.email) errors.push("email_too_long");

  if (!company || typeof company !== "string" || company.trim().length === 0)
    errors.push("company");
  else if (company.length > MAX_LENGTHS.company)
    errors.push("company_too_long");

  if (
    !eventType ||
    typeof eventType !== "string" ||
    eventType.trim().length === 0
  )
    errors.push("eventType");
  else if (eventType.length > MAX_LENGTHS.eventType)
    errors.push("eventType_too_long");

  if (
    message &&
    (typeof message !== "string" || message.length > MAX_LENGTHS.message)
  )
    errors.push("message_too_long");

  return errors;
}

// ---- Échappement HTML pour éviter l'injection dans le mail ----
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ---- Vérification Cloudflare Turnstile ----
async function verifyTurnstile(token, ip) {
  if (!token) return false;

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    }
  );
  const data = await res.json();
  return data.success === true;
}

// ---- Auth Microsoft Graph ----
async function getAccessToken() {
  const tenantId = process.env.MS_TENANT_ID;
  const clientId = process.env.MS_CLIENT_ID;
  const clientSecret = process.env.MS_CLIENT_SECRET;

  const res = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    }
  );
  const data = await res.json();
  if (!res.ok) throw new Error(data.error_description || "Erreur token");
  return data.access_token;
}

module.exports = async function (context, req) {
  const ip = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    context.res = {
      status: 429,
      body: { error: "Trop de tentatives, réessayez plus tard." },
    };
    return;
  }

  const body = req.body || {};

  if (body.website) {
    context.res = { status: 200, body: { success: true } };
    return;
  }

  const validationErrors = validate(body);
  if (validationErrors.length > 0) {
    context.res = {
      status: 400,
      body: { error: "Champs invalides", fields: validationErrors },
    };
    return;
  }

  // Turnstile déplacé DANS le try/catch pour éviter un crash non maîtrisé
  try {
    const turnstileValid = await verifyTurnstile(body.turnstileToken, ip);
    if (!turnstileValid) {
      context.res = {
        status: 400,
        body: { error: "Vérification anti-robot échouée" },
      };
      return;
    }

    const { name, email, company, eventType, message } = body;
    const token = await getAccessToken();
    const senderMail = "support@quorumevent.com";

    const emailPayload = {
      message: {
        subject: `Demande de démo — ${escapeHtml(company)} (${escapeHtml(eventType)})`,
        body: {
          contentType: "HTML",
          content: `
          <!DOCTYPE html>
          <html lang="fr">
          <head><meta charset="UTF-8"></head>
          <body style="margin:0; padding:0; background-color:#f3f4f6; font-family:Segoe UI, Arial, sans-serif;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6; padding:32px 16px;">
              <tr>
                <td align="center">
                  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:16px; overflow:hidden; max-width:600px; width:100%;">
          
                    <!-- En-tête -->
                    <tr>
                      <td style="background-color:#4f46e5; padding:28px 32px;">
                        <p style="margin:0; color:#ffffff; font-size:13px; font-weight:600; letter-spacing:0.5px; text-transform:uppercase; opacity:0.85;">
                          Quorum Event
                        </p>
                        <h1 style="margin:6px 0 0 0; color:#ffffff; font-size:22px; font-weight:700;">
                          Nouvelle demande de démo
                        </h1>
                      </td>
                    </tr>
          
                    <!-- Corps -->
                    <tr>
                      <td style="padding:32px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-bottom:18px; border-bottom:1px solid #e5e7eb;">
                              <p style="margin:0 0 4px 0; font-size:12px; font-weight:600; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Contact</p>
                              <p style="margin:0; font-size:16px; font-weight:600; color:#111827;">
                                 ${escapeHtml(name)}
                              </p>
                              <p style="margin:2px 0 0 0; font-size:14px; color:#4f46e5;">
                                <a href="mailto:${escapeHtml(email)}" style="color:#4f46e5; text-decoration:none;">
                                  ${escapeHtml(email)}
                                </a>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:18px 0; border-bottom:1px solid #e5e7eb;">
                              <p style="margin:0 0 4px 0; font-size:12px; font-weight:600; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Entreprise / Organisation</p>
                              <p style="margin:0; font-size:15px; color:#111827;">${escapeHtml(company)}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:18px 0; border-bottom:1px solid #e5e7eb;">
                              <p style="margin:0 0 4px 0; font-size:12px; font-weight:600; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Type d'événement</p>
                              <span style="display:inline-block; margin-top:2px; padding:4px 12px; background-color:#eef2ff; color:#4338ca; font-size:13px; font-weight:600; border-radius:999px;">
                                ${escapeHtml(eventType)}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top:18px;">
                              <p style="margin:0 0 6px 0; font-size:12px; font-weight:600; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Message</p>
                              <p style="margin:0; font-size:14px; line-height:1.6; color:#374151; white-space:pre-wrap;">${
                                message
                                  ? escapeHtml(message)
                                  : '<em style="color:#9ca3af;">Aucun message additionnel</em>'
                              }</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
          
                    <!-- Pied de page -->
                    <tr>
                      <td style="padding:20px 32px; background-color:#f9fafb; border-top:1px solid #e5e7eb;">
                        <p style="margin:0; font-size:12px; color:#9ca3af;">
                          Ce message a été généré automatiquement depuis le formulaire de demande de démo sur quorumevent.com.
                        </p>
                      </td>
                    </tr>
          
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>`,
        },
        toRecipients: [
          { emailAddress: { address: "support@quorumevent.com" } },
          { emailAddress: { address: "infos@quorumenligne.com" } },
        ],
        replyTo: [{ emailAddress: { address: email } }],
      },
      saveToSentItems: true,
    };

    const sendRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${senderMail}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      }
    );

    if (!sendRes.ok) {
      const errText = await sendRes.text();
      context.log.error("Graph sendMail failed:", errText);
      throw new Error("Échec envoi Graph");
    }

    context.res = { status: 200, body: { success: true } };
  } catch (err) {
    context.log.error("send-email error:", err.message);
    context.res = {
      status: 500,
      body: { error: "Échec de l'envoi, réessayez plus tard." },
    };
  }
};
