// api/subscribe — « Être prévenu des prochains événements » (pied de page)
// Prévient l'équipe par e-mail. Aucun e-mail n'est envoyé à l'adresse saisie,
// ce qui empêche d'utiliser ce formulaire pour écrire à des tiers.
const { sendToTeam, escapeHtml } = require("../shared/mail");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requestLog = new Map();
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = requestLog.get(ip) || { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) { entry.count = 0; entry.start = now; }
  entry.count += 1;
  requestLog.set(ip, entry);
  if (requestLog.size > 5000) {
    for (const [k, v] of requestLog) if (now - v.start > WINDOW_MS) requestLog.delete(k);
  }
  return entry.count > MAX_REQUESTS;
}

module.exports = async function (context, req) {
  const ip = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    context.res = { status: 429, body: { error: "Trop de tentatives, réessayez dans une minute." } };
    return;
  }

  const body = req.body || {};
  // Honeypot : un humain ne remplit jamais ce champ invisible
  if (body.website) { context.res = { status: 200, body: { success: true } }; return; }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_REGEX.test(email) || email.length > 150) {
    context.res = { status: 400, body: { error: "Adresse e-mail invalide." } };
    return;
  }

  try {
    const date = new Date().toLocaleString("fr-FR", { timeZone: "Africa/Abidjan" });
    await sendToTeam({
      subject: `Nouvelle inscription aux prochains événements — ${escapeHtml(email)}`,
      replyTo: email,
      html: `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:32px 16px;background:#f3f4f6;font-family:Segoe UI,Arial,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;max-width:560px;width:100%">
      <tr><td style="background:#4155c9;padding:24px 28px;color:#fff">
        <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:.5px;text-transform:uppercase;opacity:.85">Quorum Event</p>
        <h1 style="margin:6px 0 0;font-size:20px">Nouvelle inscription « Être prévenu »</h1>
      </td></tr>
      <tr><td style="padding:24px 28px;color:#0e1024;font-size:15px;line-height:1.6">
        <p style="margin:0 0 8px"><strong>E-mail :</strong> ${escapeHtml(email)}</p>
        <p style="margin:0;color:#535978;font-size:13px">Reçu le ${escapeHtml(date)} depuis le pied de page du site vitrine.</p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`,
    });
    context.res = { status: 200, body: { success: true } };
  } catch (err) {
    context.log.error("subscribe error:", err.message);
    context.res = { status: 500, body: { error: "L’inscription n’a pas pu être enregistrée, réessayez plus tard." } };
  }
};
