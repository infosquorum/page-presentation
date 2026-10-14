// app/components/home/NousYEtions.tsx
"use client";

import { safeMediaUrl, type FinishedEvent } from "@/lib/api/events";
import { GRADIENTS, monthYear } from "./format";

export default function NousYEtions({ events }: { events: FinishedEvent[] }) {
  // Un seul passage par client (le plus récent), clients personnes morales uniquement
  const seen = new Set<string>();
  const chips = events.filter((e) => {
    if (!e.customerName || seen.has(e.customerName)) return false;
    seen.add(e.customerName);
    return true;
  });

  if (chips.length === 0) return null;

  // Liste doublée pour un défilement continu
  const loop = chips.length >= 4 ? [...chips, ...chips] : chips;

  return (
    <section className="py-12" aria-labelledby="nous-y-etions">
      <h2 id="nous-y-etions" className="mx-auto max-w-6xl px-5 text-sm font-medium text-[var(--qe-muted)]">Nous y étions</h2>
      <div className="mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <ul className={`flex w-max gap-4 px-5 ${chips.length >= 4 ? "qe-marquee" : ""}`}>
          {loop.map((e, i) => {
            const logo = safeMediaUrl(e.customerLogo);
            return (
              <li key={`${e.id}-${i}`} aria-hidden={i >= chips.length || undefined} className="flex items-center gap-3 rounded-full border border-[var(--qe-line)] bg-[var(--qe-surface)] py-2 pl-2 pr-6">
                <span className="h-11 w-11 overflow-hidden rounded-full" style={{ background: GRADIENTS[i % GRADIENTS.length] }}>
                  {logo && <img src={logo} alt="" className="h-full w-full bg-white object-contain p-1.5" loading="lazy" />}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{e.customerName}</span>
                  <span className="block text-xs text-[var(--qe-muted)]">{monthYear(e.start)}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
