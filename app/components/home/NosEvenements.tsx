// app/components/home/NosEvenements.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { eventSiteUrl, safeMediaUrl, type UpcomingEvent } from "@/lib/api/events";
import { GRADIENTS, shortDate } from "./format";

type Props = { events: UpcomingEvent[]; status: "loading" | "ready" | "error" };

export default function NosEvenements({ events, status }: Props) {
  const cards = events.slice(0, 3);

  return (
    <section id="evenements" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="qe-title text-4xl sm:text-5xl">Nos événements.</h2>
          <Link href="/Explorer" className="text-sm font-semibold text-[var(--qe-primary)]">Voir tout</Link>
        </div>

        {status === "loading" && (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="overflow-hidden rounded-3xl border border-[var(--qe-line)] bg-[var(--qe-surface)]">
                <div className="qe-skeleton h-40" />
                <div className="space-y-3 p-6"><div className="qe-skeleton h-5 w-3/4 rounded" /><div className="qe-skeleton h-3 w-1/3 rounded" /></div>
              </div>
            ))}
          </div>
        )}

        {status !== "loading" && cards.length === 0 && (
          <div className="mt-10 rounded-3xl border border-dashed border-[var(--qe-line)] p-10 text-center">
            <p className="font-semibold">Aucun événement ouvert au public pour le moment.</p>
            <p className="mt-1 text-sm text-[var(--qe-muted)]">Vous préparez le vôtre ? Nous vous montrons comment le lancer sur la plateforme.</p>
            <Link href="/DemoRequest" className="mt-5 inline-block rounded-full bg-[var(--qe-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--qe-on-primary)]">Demander une démo</Link>
          </div>
        )}

        {cards.length > 0 && (
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {cards.map((e, i) => {
              const href = eventSiteUrl(e.subDomain);
              const img = safeMediaUrl(e.image);
              const cta = e.ticketSalesOpen ? "S'inscrire" : "Être prévenu";
              return (
                <li key={e.id} className="flex flex-col overflow-hidden rounded-3xl border border-[var(--qe-line)] bg-[var(--qe-surface)]">
                  <div className="relative h-40" style={{ background: GRADIENTS[i % GRADIENTS.length] }}>
                    {img && <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />}
                    <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#161a33] backdrop-blur">
                      {shortDate(e.start)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="qe-title text-xl">{e.name}</h3>
                    <p className="mt-2 text-sm text-[var(--qe-muted)]">{e.location}</p>
                    {href && (
                      <a href={href} className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-[var(--qe-primary)]" aria-label={`${cta} : ${e.name}`}>
                        {cta} <ArrowRight size={14} aria-hidden />
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
