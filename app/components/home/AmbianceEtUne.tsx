// app/components/home/AmbianceEtUne.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { eventSiteUrl, safeMediaUrl, type FinishedEvent } from "@/lib/api/events";
import { dateRange } from "./format";

type Props = { events: FinishedEvent[]; loading: boolean };

export default function AmbianceEtUne({ events, loading }: Props) {
  if (!loading && events.length === 0) return null;

  // Vidéo : la plus récente disponible parmi les événements terminés
  const withVideo = events.find((e) => safeMediaUrl(e.eventVideo));
  const video = safeMediaUrl(withVideo?.eventVideo);
  const poster = safeMediaUrl(withVideo?.image ?? events[0]?.image) ?? undefined;
  const featured = events.slice(0, 4);

  return (
    <section id="ambiance" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[1.25fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[var(--qe-soft)]">
          {loading ? (
            <div className="qe-skeleton absolute inset-0" />
          ) : video ? (
            <video className="absolute inset-0 h-full w-full object-cover" src={video} poster={poster} controls preload="none" playsInline />
          ) : poster ? (
            <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          ) : null}
          {!loading && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-16 text-white">
              <p className="qe-title text-2xl">Revivez l&apos;ambiance.</p>
              {withVideo && <p className="mt-1 text-sm opacity-80">{withVideo.name}</p>}
            </div>
          )}
        </div>

        <div>
          <h2 className="qe-title text-4xl">À la une.</h2>
          <p className="mt-2 text-sm text-[var(--qe-muted)]">Les dernières séances que nous avons accompagnées.</p>
          <ul className="mt-6 divide-y divide-[var(--qe-line)] border-y border-[var(--qe-line)]">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="py-4"><div className="qe-skeleton h-4 w-3/4 rounded" /><div className="qe-skeleton mt-2 h-3 w-1/3 rounded" /></li>
                ))
              : featured.map((e) => {
                  const href = eventSiteUrl(e.subDomain);
                  return (
                    <li key={e.id} className="flex items-center justify-between gap-4 py-4">
                      <div>
                        <p className="font-semibold leading-snug">{e.name}</p>
                        <p className="mt-1 text-xs text-[var(--qe-muted)]">{dateRange(e.start, e.end)} · {e.location}</p>
                      </div>
                      {href && (
                        <a href={href} className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[var(--qe-primary)]" aria-label={`Découvrir ${e.name}`}>
                          Découvrir <ArrowRight size={14} aria-hidden />
                        </a>
                      )}
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </section>
  );
}
