// lib/api/config.ts
// Les variables NEXT_PUBLIC_* sont injectées au build (output: 'export').
// Elles sont publiques par nature : n'y mettre aucun secret.

export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/+$/, "");

// Domaine des sites d'événement : https://{subdomain}.myquorumevent.com
export const EVENT_SITE_DOMAIN =
  process.env.NEXT_PUBLIC_EVENT_SITE_DOMAIN || "myquorumevent.com";

export const REQUEST_TIMEOUT_MS = 8000;
