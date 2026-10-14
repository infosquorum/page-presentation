// app/components/home/UpcomingTicker.tsx
"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { eventSiteUrl, type UpcomingEvent } from "@/lib/api/events";
import { tickerDate } from "./format";

const INTERVAL_MS = 5000;

export default function UpcomingTicker({ events }: { events: UpcomingEvent[] }) {
  const items = events.slice(0, 3);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) setPaused(true);
  }, []);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, items.length]);

  if (items.length === 0) return null;
  const ev = items[index % items.length];
  const href = eventSiteUrl(ev.subDomain);

  return (
    <div className="mx-auto max-w-4xl px-5">
      <div className="flex items-center gap-4 rounded-full border border-[var(--qe-line)] bg-[var(--qe-surface)] p-2 pr-3 text-sm">
        <span className="shrink-0 rounded-full bg-[var(--qe-primary)] px-4 py-2 text-xs font-semibold text-[var(--qe-on-primary)]">À venir</span>
        <p className="min-w-0 flex-1 truncate" aria-live="polite">
          <strong>{tickerDate(ev.start)}</strong> ·{" "}
          {href ? <a href={href} className="hover:underline">{ev.name}</a> : ev.name}
          <span className="text-[var(--qe-muted)]"> · {ev.location}</span>
        </p>
        {items.length > 1 && (
          <>
            <span className="hidden text-xs text-[var(--qe-muted)] sm:inline">{index + 1} / {items.length}</span>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Relancer le défilement" : "Mettre le défilement en pause"}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--qe-line)]"
            >
              {paused ? <Play size={14} aria-hidden /> : <Pause size={14} aria-hidden />}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
