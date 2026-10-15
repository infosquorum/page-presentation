// app/components/home/HomeHero.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { useUpcomingEvents } from "@/hooks/useShowcaseEvents";
import { countdownParts } from "@/lib/format";
import { ROUTES } from "@/lib/site";
import { ArrowIcon, CheckIcon, ScanIcon } from "../site/Icons";

const WORDS = ["conférences", "cérémonies", "assemblées générales", "séminaires", "forums", "soirées de gala"];

export default function HomeHero() {
  const { items: upcoming } = useUpcomingEvents(6);
  const next = upcoming[0];
  const [now, setNow] = useState(() => Date.now());
  const [word, setWord] = useState(0);
  const [arrived, setArrived] = useState(388);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setInterval(() => setNow(Date.now()), 1000);
    if (reduce) return () => clearInterval(t);
    const w = setInterval(() => setWord((i) => (i + 1) % WORDS.length), 2400);
    const a = setInterval(() => setArrived((n) => (n >= 500 ? 388 : n + 1)), 900);
    return () => { clearInterval(t); clearInterval(w); clearInterval(a); };
  }, []);

  // Le tableau de bord suit légèrement la souris (variables CSS, pas de re-rendu)
  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse" || !stage.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    const s = stage.current.style;
    s.setProperty("--hrx", `${((0.5 - y) * 6).toFixed(2)}deg`);
    s.setProperty("--hry", `${((x - 0.5) * 8).toFixed(2)}deg`);
  };
  const onLeave = () => { stage.current?.style.removeProperty("--hrx"); stage.current?.style.removeProperty("--hry"); };

  const cd = next ? countdownParts(next.start, now) : null;

  return (
    <section onPointerMove={onMove} onPointerLeave={onLeave} className="relative px-5 pb-[72px] pt-12 text-center sm:px-6 sm:pb-[120px] sm:pt-[88px]">
      <div aria-hidden className="q-gridbg q-grid absolute inset-0" />
      <div aria-hidden className="absolute left-1/2 top-[-180px] h-[640px] w-[min(1100px,140vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(110,127,243,.55),rgba(185,169,238,.35)_55%,transparent)] blur-[30px]" />
      <div aria-hidden className="absolute right-[4%] top-[360px] h-80 w-[min(420px,70vw)] rounded-full bg-[radial-gradient(closest-side,rgba(242,180,140,.6),transparent)] blur-[30px]" />

      <div className="relative mx-auto max-w-[1100px]">
        {next && cd && (
          <Link href="#evenements" className="inline-flex max-w-full items-center gap-3 rounded-full border border-ink/[.08] bg-white/75 py-1.5 pl-3.5 pr-1.5 text-[13px] text-ink">
            <span className="q-live h-2 w-2 shrink-0 rounded-full bg-[#3fae8c]" />
            <span className="truncate text-[#3a3f5c]">Prochain : <b className="font-semibold text-ink">{next.name}</b></span>
            <span className="hidden gap-[3px] text-xs font-semibold tabular-nums sm:inline-flex" aria-label={`Dans ${cd.d} jours`}>
              <span className="rounded-l-full rounded-r-md bg-ink px-2.5 py-1 text-white">{cd.d} j</span>
              <span className="rounded-md bg-ink px-2.5 py-1 text-white">{cd.h} h</span>
              <span className="rounded-md bg-ink px-2.5 py-1 text-white">{cd.m} m</span>
              <span className="rounded-l-md rounded-r-full bg-brand px-2.5 py-1 text-white">{cd.s} s</span>
            </span>
          </Link>
        )}

        <h1 className="sd-fill q-fill-light mt-10 text-[clamp(48px,9vw,140px)] font-semibold leading-[.92] tracking-[-0.06em]">
          L’événement,<br />de bout en bout.
        </h1>
        <p className="mx-auto mt-7 max-w-[640px] text-[clamp(17px,2vw,21px)] leading-normal text-slate">
          Vos <span key={word} className="q-word inline-block font-semibold text-ink">{WORDS[word]}</span>, de l’inscription au bilan : billetterie mobile, accueil par scan, votes et interactions en direct.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={ROUTES.demo} className="q-btn inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-full bg-brand px-7 font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_12px_30px_-12px_rgba(65,85,201,.8)]">
            Demander une démo <ArrowIcon size={14} />
          </Link>
          <Link href="#formats" className="q-btn inline-flex min-h-[54px] items-center justify-center rounded-full border border-ink/10 bg-white px-6 font-medium text-ink">Voir nos prestations</Link>
        </div>
      </div>

      {/* Tableau de bord illustratif : se redresse au défilement, suit la souris */}
      <div className="sd-tilt relative mx-auto mt-[88px] max-w-[1080px]">
        <div ref={stage} className="transition-transform duration-500 [transform:perspective(1800px)_rotateX(var(--hrx,0deg))_rotateY(var(--hry,0deg))]">
          <div className="rounded-[22px] bg-[linear-gradient(160deg,rgba(255,255,255,.9),rgba(14,16,36,.12)_60%,rgba(110,127,243,.5))] p-px shadow-[0_80px_140px_-60px_rgba(14,16,36,.55),0_30px_60px_-30px_rgba(65,85,201,.35)]">
            <div className="overflow-hidden rounded-[21px] bg-[#fbfbfe] text-left">
              <div className="flex items-center gap-2 border-b border-ink/5 px-4 py-3 text-xs text-slate">
                <span className="h-2.5 w-2.5 rounded-full bg-pink" /><span className="h-2.5 w-2.5 rounded-full bg-peach" /><span className="h-2.5 w-2.5 rounded-full bg-mint" />
                <span className="ml-2.5 hidden rounded-md bg-cloud px-2.5 py-1 sm:inline">trophees-entrepreneuriat / direct</span>
                <span className="ml-auto inline-flex items-center gap-1.5 font-semibold text-[#23795e]"><span className="q-live h-[7px] w-[7px] rounded-full bg-[#3fae8c]" />En direct</span>
              </div>
              <div className="flex">
                <div className="hidden w-[200px] shrink-0 flex-col gap-1 border-r border-ink/5 p-4 text-[13px] text-slate lg:flex">
                  <span className="rounded-lg bg-cloud px-2.5 py-2 font-semibold text-ink">Vue d’ensemble</span>
                  {["Billetterie", "Invités", "Contrôle d’accès", "Vote du public", "Bilan"].map((l) => <span key={l} className="px-2.5 py-2">{l}</span>)}
                </div>
                <div className="grid min-w-0 flex-1 grid-cols-1 gap-3.5 p-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-ink/[.07] bg-white p-[18px]">
                    <div className="text-xs text-slate">Invités accueillis</div>
                    <div className="mt-2.5 text-[46px] font-semibold tabular-nums tracking-[-0.05em]">{arrived}<span className="text-[15px] font-normal text-[#8a8fae]"> / 500</span></div>
                    <div className="mt-3 h-[5px] rounded bg-[#eceef7]"><div className="h-full rounded bg-[linear-gradient(90deg,#6e7ff3,#4155c9)] transition-[width] duration-700" style={{ width: `${Math.round(arrived / 5)}%` }} /></div>
                  </div>
                  <div className="min-w-0 rounded-2xl border border-ink/[.07] bg-white p-[18px] md:col-span-2">
                    <div className="flex justify-between gap-2.5 text-xs text-slate"><span>Arrivées par heure</span><span>Entrées A · B</span></div>
                    <svg aria-hidden viewBox="0 0 520 110" className="mt-2.5 w-full">
                      <defs><linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6e7ff3" stopOpacity=".35" /><stop offset="1" stopColor="#6e7ff3" stopOpacity="0" /></linearGradient></defs>
                      <path d="M0 100 C60 96 90 80 140 70 S220 26 280 50 S380 12 440 20 S500 30 520 24 V110 H0Z" fill="url(#hero-area)" />
                      <path className="q-draw" d="M0 100 C60 96 90 80 140 70 S220 26 280 50 S380 12 440 20 S500 30 520 24" fill="none" stroke="#4155c9" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="rounded-2xl border border-ink/[.07] bg-white p-[18px] text-[13px]">
                    <div className="text-xs text-slate">Prix du public · vote ouvert</div>
                    {[["Cand. A", 48, "#4155c9"], ["Cand. B", 33, "#6e7ff3"], ["Cand. C", 19, "#b9a9ee"]].map(([l, v, c]) => (
                      <div key={l} className="mt-3 flex items-center gap-2.5">
                        <span className="w-[60px]">{l}</span>
                        <div className="h-[5px] flex-1 rounded bg-[#eceef7]"><div className="h-full rounded" style={{ width: `${v}%`, background: c as string }} /></div>
                        <b className="w-[38px] text-right font-semibold">{v} %</b>
                      </div>
                    ))}
                  </div>
                  <div className="min-w-0 rounded-2xl border border-ink/[.07] bg-white p-[18px] text-[13px] md:col-span-2">
                    <div className="text-xs text-slate">Derniers billets vendus</div>
                    <div className="mt-2.5 flex flex-col gap-2">
                      <div className="flex justify-between gap-2.5"><span>Wave · Billet invité</span><b className="whitespace-nowrap font-semibold">15 000 FCFA</b></div>
                      <div className="flex justify-between gap-2.5"><span>Orange Money · Table VIP</span><b className="whitespace-nowrap font-semibold">150 000 FCFA</b></div>
                      <div className="flex justify-between gap-2.5 text-[#8a8fae]"><span>MTN · Billet invité</span><b className="whitespace-nowrap font-semibold">15 000 FCFA</b></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="q-float absolute -left-12 top-[38%] hidden items-center gap-3 rounded-[18px] border border-ink/5 bg-white/90 py-3 pl-3 pr-5 text-left shadow-[0_30px_60px_-24px_rgba(14,16,36,.4)] lg:flex">
            <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-mint text-ink"><CheckIcon size={18} /></span>
            <span><span className="block text-[11px] text-slate">Billet payé avec Wave</span><b className="font-semibold">15 000 FCFA</b></span>
          </div>
          <div className="q-float-2 absolute -right-12 bottom-[16%] hidden items-center gap-3 rounded-[18px] border border-ink/5 bg-white/90 py-3 pl-3 pr-5 text-left shadow-[0_30px_60px_-24px_rgba(14,16,36,.4)] lg:flex">
            <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-lavender text-ink"><ScanIcon /></span>
            <span><span className="block text-[11px] text-slate">Invitation scannée</span><b className="font-semibold">Entrée VIP · 19:42</b></span>
          </div>
        </div>
      </div>
      <p className="relative mt-7 text-xs text-[#8a8fae]">Illustration · données d’exemple</p>
    </section>
  );
}
