// app/evenements/EventsExplorer.tsx — liste filtrable des événements (API)
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useFinishedEvents, useUpcomingEvents } from "@/hooks/useShowcaseEvents";
import { eventSiteUrl, safeMediaUrl, type FinishedEvent, type UpcomingEvent } from "@/lib/api/events";
import { dateRange } from "@/lib/format";
import { IMAGES, ROUTES } from "@/lib/site";
import { ArrowIcon } from "../components/site/Icons";

type Period = "up" | "past";
type Item = (UpcomingEvent | FinishedEvent) & { period: Period };
const FALLBACK = [IMAGES.gala, IMAGES.forum, IMAGES.auditorium, IMAGES.seminaire, IMAGES.convention, IMAGES.fireworks];
const normalize = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function EventsExplorer() {
  const up = useUpcomingEvents(20);
  const past = useFinishedEvents(20);
  const [period, setPeriod] = useState<Period>("up");
  const [type, setType] = useState("Tous");
  const [query, setQuery] = useState("");

  const source = period === "up" ? up : past;
  const all: Item[] = useMemo(() => source.items.map((e) => ({ ...e, period })), [source.items, period]);
  const types = useMemo(() => ["Tous", ...Array.from(new Set(all.map((e) => e.eventType))).sort()], [all]);
  const items = all.filter((e) =>
    (type === "Tous" || e.eventType === type) &&
    (!query || normalize(`${e.name} ${e.location} ${e.eventType}`).includes(normalize(query))));

  const tab = (p: Period, label: string) => (
    <button type="button" role="tab" aria-selected={period === p} onClick={() => { setPeriod(p); setType("Tous"); }}
      className={`min-h-[42px] rounded-full px-5 font-semibold transition-colors ${period === p ? "bg-ink text-white" : "text-slate"}`}>{label}</button>
  );

  return (
    <>
      <section className="px-5 pb-10 pt-12 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-[1240px]">
          <h1 className="text-[clamp(56px,10vw,150px)] font-semibold leading-[.88] tracking-[-0.065em]">Événements.</h1>
          <div className="mt-9 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div role="tablist" aria-label="Période" className="inline-flex self-start rounded-full border border-ink/[.08] bg-white p-1">
              {tab("up", "À venir")}{tab("past", "Passés")}
            </div>
            <label className="flex min-h-12 items-center gap-2.5 rounded-full border border-ink/10 bg-white px-4 text-slate md:w-[360px]">
              <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
              <span className="sr-only">Rechercher un événement</span>
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher un événement" className="min-w-0 flex-1 bg-transparent text-ink focus:outline-none" />
            </label>
          </div>
          {types.length > 2 && (
            <div role="group" aria-label="Type d’événement" className="mt-[18px] flex gap-2 overflow-x-auto pb-1.5 [scrollbar-width:none]">
              {types.map((t) => (
                <button key={t} type="button" onClick={() => setType(t)} aria-pressed={type === t}
                  className={`min-h-10 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors ${type === t ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-ink"}`}>
                  {t === "Tous" ? "Tous les formats" : t}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-5 pb-[120px] pt-6 sm:px-6" aria-live="polite">
        <div className="mx-auto max-w-[1240px]">
          {source.status === "loading" ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[0, 1, 2].map((i) => <div key={i} className="h-[420px] animate-pulse rounded-[26px] bg-cloud" />)}</div>
          ) : source.status === "error" ? (
            <p className="rounded-[26px] border border-dashed border-ink/20 px-6 py-16 text-center text-lg">La liste des événements n’a pas pu être chargée. Rechargez la page dans un instant.</p>
          ) : items.length === 0 ? (
            <div className="rounded-[26px] border border-dashed border-ink/20 px-6 py-16 text-center">
              <p className="text-xl font-semibold">Aucun événement ne correspond pour le moment.</p>
              <p className="mt-2 text-slate">Changez de filtre, ou parlez-nous du vôtre.</p>
              <Link href={ROUTES.demo} className="q-btn mt-6 inline-flex min-h-12 items-center rounded-full bg-brand px-6 font-medium text-white">Demander une démo</Link>
            </div>
          ) : (
            <>
              <p className="mb-5 text-sm text-slate">{items.length} {items.length > 1 ? "événements" : "événement"} {period === "up" ? "à venir" : "passés"}</p>
              <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {items.map((e, i) => {
                  const href = eventSiteUrl(e.subDomain);
                  const cta = e.period === "past" ? "Revoir l’événement" : "ticketSalesOpen" in e && e.ticketSalesOpen ? "Réserver" : "Être prévenu";
                  return (
                    <li key={e.id} className="q-zoom flex flex-col overflow-hidden rounded-[26px] border border-ink/[.07] bg-white">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img src={safeMediaUrl(e.image) ?? FALLBACK[i % FALLBACK.length]} alt="" loading="lazy" className="h-full w-full object-cover" />
                        <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold">{dateRange(e.start, e.end)}</span>
                        <span className="absolute right-3.5 top-3.5 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white">{e.period === "up" ? "À venir" : "Terminé"}</span>
                      </div>
                      <div className="flex flex-1 flex-col p-[22px]">
                        <div className="text-[13px] font-medium text-brand">{e.eventType}</div>
                        <h2 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-0.03em]">{e.name}</h2>
                        <div className="mt-1.5 text-sm text-slate">{e.location}</div>
                        {href && <a href={href} className="mt-auto inline-flex min-h-11 items-center gap-2 pt-[18px] font-semibold text-brand">{cta} <ArrowIcon /></a>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  );
}
