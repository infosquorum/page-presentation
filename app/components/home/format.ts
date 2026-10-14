// app/components/home/format.ts
import { differenceInCalendarDays, format, isSameDay, isSameMonth } from "date-fns";
import { fr } from "date-fns/locale";

export const shortDate = (iso: string) => format(new Date(iso), "d MMM yyyy", { locale: fr });
export const tickerDate = (iso: string) => format(new Date(iso), "d MMM", { locale: fr });
export const monthYear = (iso: string) => format(new Date(iso), "MMMM yyyy", { locale: fr });

// « 27–28 novembre 2024 », « 5 juin 2024 », « 30 mai – 2 juin 2024 »
export function dateRange(startIso: string, endIso: string) {
  const s = new Date(startIso);
  const e = new Date(endIso);
  if (isSameDay(s, e)) return format(s, "d MMMM yyyy", { locale: fr });
  if (isSameMonth(s, e)) return `${format(s, "d", { locale: fr })}–${format(e, "d MMMM yyyy", { locale: fr })}`;
  return `${format(s, "d MMM", { locale: fr })} – ${format(e, "d MMM yyyy", { locale: fr })}`;
}

export function countdown(startIso: string) {
  const days = differenceInCalendarDays(new Date(startIso), new Date());
  if (days <= 0) return "Prochain événement aujourd'hui";
  if (days === 1) return "Prochain événement demain";
  return `Prochain événement dans ${days} jours`;
}

// Dégradés de repli quand un événement n'a pas d'image
export const GRADIENTS = [
  "linear-gradient(135deg, var(--qe-blue), var(--qe-lavender))",
  "linear-gradient(135deg, var(--qe-peach), var(--qe-pink))",
  "linear-gradient(135deg, var(--qe-mint), var(--qe-blue))",
  "linear-gradient(135deg, var(--qe-lavender), var(--qe-peach))",
];
