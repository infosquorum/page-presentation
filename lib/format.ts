// lib/format.ts — dates en français
import { differenceInCalendarDays, format, isSameDay, isSameMonth } from "date-fns";
import { fr } from "date-fns/locale";

export const shortDate = (iso: string) => format(new Date(iso), "d MMM yyyy", { locale: fr });
export const monthYear = (iso: string) => format(new Date(iso), "MMMM yyyy", { locale: fr });

export function dateRange(startIso: string, endIso: string) {
  const s = new Date(startIso), e = new Date(endIso);
  if (isSameDay(s, e)) return format(s, "d MMMM yyyy", { locale: fr });
  if (isSameMonth(s, e)) return `${format(s, "d", { locale: fr })}–${format(e, "d MMMM yyyy", { locale: fr })}`;
  return `${format(s, "d MMM", { locale: fr })} – ${format(e, "d MMM yyyy", { locale: fr })}`;
}

export const daysUntil = (iso: string) => Math.max(0, differenceInCalendarDays(new Date(iso), new Date()));

export function countdownParts(iso: string, now: number) {
  const diff = Math.max(0, new Date(iso).getTime() - now);
  const pad = (n: number) => String(n).padStart(2, "0");
  return {
    d: Math.floor(diff / 86_400_000),
    h: pad(Math.floor(diff / 3_600_000) % 24),
    m: pad(Math.floor(diff / 60_000) % 60),
    s: pad(Math.floor(diff / 1000) % 60),
  };
}
