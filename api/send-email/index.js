const fetch = require('node-fetch')

// ---- Rate limiting simple en mémoire (par instance de Function) ----
// Pour un formulaire de contact classique c'est suffisant.
// Si besoin de plus robuste plus tard : Azure Table Storage ou Redis.
const requestLog = new Map()
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3

function isRateLimited(ip) {
  const now = Date.now()
  const entry = requestLog.get(ip) || { count: 0, windowStart: now }

  if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0
    entry.windowStart = now
  }

  entry.count += 1
  requestLog.set(ip, entry)

  // Nettoyage périodique pour éviter fuite mémoire
  if (requestLog.size > 5000) {
    for (const [key, val] of requestLog) {
      if (now - val.windowStart > RATE_LIMIT_WINDOW_MS) requestLog.delete(key)
    }
  }

  return entry.count > RATE_LIMIT_MAX_REQUESTS
}

// ---- Validation ----
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LENGTHS = { name: 100, email: 150, company: 150, eventType: 50, message: 2000 }

function validate(body) {
  const errors = []
  const { name, email, company, eventType, message } = body || {}

  if (!name || typeof name !== 'string' || name.trim().length === 0) errors.push('name')
  else if (name.length > MAX_LENGTHS.name) errors.push('name_too_long')

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) errors.push('email')
  else if (email.length > MAX_LENGTHS.email) errors.push('email_too_long')

  if (!company || typeof company !== 'string' || company.trim().length === 0) errors.push('company')
  else if (company.length > MAX_LENGTHS.company) errors.push('company_too_long')

  if (!eventType || typeof eventType !== 'string' || eventType.trim().length === 0) errors.push('eventType')
  else if (eventType.length > MAX_LENGTHS.eventType) errors.push('eventType_too_long')

  if (message && (typeof message !== 'string' || message.length > MAX_LENGTHS.message)) errors.push('message_too_long')

  return errors
}

// ---- Échappement HTML pour éviter l'injection dans le mail ----
function escapeHtml(str) {
  if (typeof str !== 'string') return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// ---- Vérification Cloudflare Turnstile ----
async function verifyTurnstile(token, ip) {
  if (!token) return false

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: ip
    })
  })
  const data = await res.json()
  return data.success === true
}

// ---- Auth Microsoft Graph ----
async function getAccessToken() {
  const tenantId = process.env.MS_TENANT_ID
  const clientId = process.env.MS_CLIENT_ID
  const clientSecret = process.env.MS_CLIENT_SECRET

  const res = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials'
    })
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error_description || 'Erreur token')
  return data.access_token
}

module.exports = async function (context, req) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown'

  // 1. Rate limiting
  if (isRateLimited(ip)) {
    context.res = { status: 429, body: { error: 'Trop de tentatives, réessayez plus tard.' } }
    return
  }

  const body = req.body || {}

  // 2. Honeypot — champ invisible, doit rester vide. Si rempli = bot.
  if (body.website) {
    // On répond succès pour ne pas indiquer au bot qu'il a été détecté
    context.res = { status: 200, body: { success: true } }
    return
  }

  // 3. Validation des champs
  const validationErrors = validate(body)
  if (validationErrors.length > 0) {
    context.res = { status: 400, body: { error: 'Champs invalides', fields: validationErrors } }
    return
  }

  // 4. Vérification anti-bot Turnstile
  const turnstileValid = await verifyTurnstile(body.turnstileToken, ip)
  if (!turnstileValid) {
    context.res = { status: 400, body: { error: 'Vérification anti-robot échouée' } }
    return
  }

  const { name, email, company, eventType, message } = body

  try {
    const token = await getAccessToken()
    const senderMail = 'support@quorumenvent.com'

    const emailPayload = {
      message: {
        subject: `Nouvelle demande de démo - ${escapeHtml(company)}`,
        body: {
          contentType: 'HTML',
          content: `
            <h2>Nouvelle demande de démo</h2>
            <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
            <p><strong>Email :</strong> ${escapeHtml(email)}</p>
            <p><strong>Entreprise :</strong> ${escapeHtml(company)}</p>
            <p><strong>Type d'événement :</strong> ${escapeHtml(eventType)}</p>
            <p><strong>Message :</strong> ${escapeHtml(message || '-')}</p>
          `
        },
        toRecipients: [
          { emailAddress: { address: 'support@quorumenvent.com' } },
          { emailAddress: { address: 'infos@quorumenligne.com' } }
        ],
        replyTo: [{ emailAddress: { address: email } }]
      },
      saveToSentItems: true
    }

    const sendRes = await fetch(`https://graph.microsoft.com/v1.0/users/${senderMail}/sendMail`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    })

    if (!sendRes.ok) {
      const errText = await sendRes.text()
      context.log.error('Graph sendMail failed:', errText)
      throw new Error('Échec envoi Graph')
    }

    context.res = { status: 200, body: { success: true } }
  } catch (err) {
    context.log.error('send-email error:', err.message)
    context.res = { status: 500, body: { error: "Échec de l'envoi, réessayez plus tard." } }
  }
}