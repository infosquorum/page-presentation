// api/shared/mail.js — envoi d'e-mails via Microsoft Graph (mêmes variables que send-email)
const fetch = require("node-fetch");

const SENDER = "support@quorumevent.com";
const TEAM = ["support@quorumevent.com", "infos@quorumenligne.com"];

async function getAccessToken() {
  const res = await fetch(`https://login.microsoftonline.com/${process.env.MS_TENANT_ID}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.MS_CLIENT_ID,
      client_secret: process.env.MS_CLIENT_SECRET,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error_description || "Erreur token");
  return data.access_token;
}

async function sendToTeam({ subject, html, replyTo }) {
  const token = await getAccessToken();
  const res = await fetch(`https://graph.microsoft.com/v1.0/users/${SENDER}/sendMail`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: {
        subject,
        body: { contentType: "HTML", content: html },
        toRecipients: TEAM.map((address) => ({ emailAddress: { address } })),
        ...(replyTo ? { replyTo: [{ emailAddress: { address: replyTo } }] } : {}),
      },
      saveToSentItems: true,
    }),
  });
  if (!res.ok) throw new Error(`Graph sendMail: ${await res.text()}`);
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

module.exports = { sendToTeam, escapeHtml };
