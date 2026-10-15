// lib/api/events.ts
// Client des endpoints publics de la vitrine :
//   GET /api/events/upcoming?limit=N
//   GET /api/events/finished?limit=N
import { API_URL, EVENT_SITE_DOMAIN, REQUEST_TIMEOUT_MS } from "./config";

type EventBase = {
  id: string;
  name: string;
  description: string;
  location: string;
  start: string; // ISO 8601
  end: string;
  image: string;
  subDomain: string;
  eventType: string;
  isFree: boolean;
  customerName: string | null;
  customerLogo: string | null;
};

export type UpcomingEvent = EventBase & {
  ticketSalesOpen: boolean;
};

export type FinishedEvent = EventBase & {
  eventVideo: string | null;
};

async function getJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  if (!API_URL) throw new Error("NEXT_PUBLIC_API_URL n'est pas défini.");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  signal?.addEventListener("abort", () => controller.abort(), { once: true });

  try {
    const res = await fetch(`${API_URL}${path}`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`${path} a répondu ${res.status}`);
    return (await res.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}

// Une seule requête par URL et par visite : plusieurs sections de la page
// peuvent demander la même liste sans multiplier les appels.
const cache = new Map<string, Promise<unknown>>();
function cached<T>(path: string): Promise<T> {
  if (!cache.has(path)) {
    const p = getJson<T>(path).catch((e) => {
      cache.delete(path);
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[Quorum Event] Échec de ${API_URL || "(NEXT_PUBLIC_API_URL non défini)"}${path} :`, e);
      }
      throw e;
    });
    cache.set(path, p);
  }
  return cache.get(path) as Promise<T>;
}

export const listUpcomingEvents = (limit = 5) => cached<UpcomingEvent[]>(`/api/events/upcoming?limit=${limit}`);

export const listFinishedEvents = (limit = 5) => cached<FinishedEvent[]>(`/api/events/finished?limit=${limit}`);

// Le sous-domaine vient de l'API : on le valide avant de l'insérer dans une URL
// pour qu'une valeur inattendue ne puisse jamais pointer vers un autre hôte.
const SUBDOMAIN_PATTERN = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i;

export function eventSiteUrl(subDomain: string): string | null {
  return SUBDOMAIN_PATTERN.test(subDomain)
    ? `https://${subDomain.toLowerCase()}.${EVENT_SITE_DOMAIN}`
    : null;
}

// N'accepte que des URLs http(s) pour les médias (images, vidéos).
export function safeMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    return u.protocol === "https:" || u.protocol === "http:" ? u.toString() : null;
  } catch {
    return null;
  }
}
