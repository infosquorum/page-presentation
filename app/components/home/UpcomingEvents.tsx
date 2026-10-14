// app/components/home/UpcomingEvents.tsx — prochains événements (API), cartes 3D
"use client";

import Link from "next/link";
import { useUpcomingEvents } from "@/hooks/useShowcaseEvents";
import { eventSiteUrl, safeMediaUrl } from "@/lib/api/events";
import { daysUntil, shortDate } from "@/lib/format";
import { IMAGES, ROUTES } from "@/lib/site";
import { ArrowIcon } from "../site/Icons";
import { TiltCard } from "../site/Interactive";

const FALLBACK = [IMAGES.gala, IMAGES.forum, IMAGES.auditorium];

export default function UpcomingEvents() {
  const { items, status } = useUpcomingEvents(6);
  const cards = items.slice(0, 3);

  return (
    <section id="evenements" className="px-5 py-[88px] sm:px-6 sm:pb-[120px] sm:pt-[150px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-[clamp(40px,6vw,88px)] font-semibold leading-[.92] tracking-[-0.06em]">Nos prochains<br />rendez-vous.</h2>
          <Link href={ROUTES.evenements} className="q-link inline-flex min-h-11 items-center self-start font-medium text-ink">Voir tous les événements</Link>
        </div>

        {status === "loading" && (
          <div className="mt-[60px] grid gap-[22px] md:grid-cols-3">
            {[0, 1, 2].map((i) => <div key={i} className="h-[460px] animate-pulse rounded-[28px] bg-cloud sm:h-[520px]" />)}
          </div>
        )}

        {status !== "loading" && cards.length === 0 && (
          <div className="mt-[60px] rounded-[28px] border border-dashed border-ink/20 px-6 py-16 text-center">
            <p className="text-xl font-semibold">Aucun événement ouvert au public pour le moment.</p>
            <p className="mt-2 text-slate">Vous préparez le vôtre ? Nous vous montrons comment le lancer sur la plateforme.</p>
            <Link href={ROUTES.demo} className="q-btn mt-6 inline-flex min-h-12 items-center rounded-full bg-brand px-6 font-medium text-white">Demander une démo</Link>
          </div>
        )}

        {cards.length > 0 && (
          <ul className="mt-[60px] grid gap-[22px] md:grid-cols-2 lg:grid-cols-3">
            {cards.map((e, i) => {
              const href = eventSiteUrl(e.subDomain);
              const img = safeMediaUrl(e.image) ?? FALLBACK[i % FALLBACK.length];
              const cta = e.ticketSalesOpen ? "Réserver" : "Être prévenu";
              return (
                <li key={e.id}>
                  <TiltCard className="relative h-[460px] overflow-hidden rounded-[28px] text-white shadow-[0_20px_40px_-30px_rgba(7,8,26,.4)] hover:shadow-[0_50px_90px_-40px_rgba(7,8,26,.65)] sm:h-[520px]">
                    <img src={img} alt="" loading="lazy" className="q-tilt-img absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,26,.15),rgba(7,8,26,.1)_40%,rgba(7,8,26,.88))]" />
                    <div className="q-tilt-light absolute inset-0" />
                    <div className="relative flex h-full flex-col p-[22px]">
                      <div className="flex justify-between gap-2.5">
                        <span className="rounded-full border border-white/25 bg-white/[.18] px-3.5 py-[7px] text-[13px] font-medium backdrop-blur-md">{shortDate(e.start)}</span>
                        <span className="rounded-full bg-white px-3.5 py-[7px] text-[13px] font-semibold tabular-nums text-night">J-{daysUntil(e.start)}</span>
                      </div>
                      <div className="mt-auto">
                        <div className="text-[13px] opacity-80">{e.eventType} · {e.location}</div>
                        <h3 className="mt-2.5 text-[27px] font-semibold leading-[1.1] tracking-[-0.035em]">{e.name}</h3>
                        {href && (
                          <a href={href} className="q-btn mt-[22px] inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-white px-5 text-sm font-semibold text-night" aria-label={`${cta} : ${e.name}`}>
                            {cta} <ArrowIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
