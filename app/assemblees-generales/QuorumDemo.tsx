// app/assemblees-generales/QuorumDemo.tsx — jauge de quorum animée (données d'exemple)
"use client";

import { useEffect, useState } from "react";

const THRESHOLD = 50;

export default function QuorumDemo() {
  const [quorum, setQuorum] = useState(18);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setQuorum(82); return; }
    const t = setInterval(() => setQuorum((q) => (q >= 82 ? 18 : q + 1)), 220);
    return () => clearInterval(t);
  }, []);

  const open = quorum >= THRESHOLD;
  return (
    <div className="w-full rounded-[28px] border border-white/10 bg-night-2 p-6 sm:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="text-[13px] text-haze">Quorum atteint</div>
          <div className="mt-1.5 text-[clamp(56px,7vw,88px)] font-semibold leading-none tracking-[-0.06em] tabular-nums" aria-live="off">{quorum} %</div>
        </div>
        <span className={`inline-flex items-center self-start rounded-full px-3.5 py-2 text-[13px] font-semibold sm:self-auto ${open ? "bg-mint/15 text-mint" : "bg-peach/15 text-peach"}`}>
          {open ? "Séance ouverte" : "En attente du quorum"}
        </span>
      </div>
      <div className="relative mt-[22px] h-3.5 overflow-hidden rounded-full bg-[#1c2046]">
        <div className="h-full rounded-full bg-[linear-gradient(90deg,#6e7ff3,#8fd3be)] transition-[width] duration-700" style={{ width: `${quorum}%` }} />
        <span className="absolute inset-y-[-4px] left-1/2 w-0.5 bg-white" />
      </div>
      <div className="mt-2 flex justify-between text-xs text-[#6f7598]"><span>0 %</span><span>Seuil requis : {THRESHOLD} %</span><span>100 %</span></div>
      <ul className="mt-[26px] flex flex-col gap-2.5 text-sm">
        <li className="flex justify-between gap-2.5 rounded-[14px] bg-white/[.04] px-4 py-3.5"><span>Résolution 1 · Approbation des comptes</span><b className="whitespace-nowrap font-semibold text-mint">Adoptée · 96 %</b></li>
        <li className="flex justify-between gap-2.5 rounded-[14px] bg-white/[.04] px-4 py-3.5"><span>Résolution 2 · Affectation du résultat</span><b className="whitespace-nowrap font-semibold text-mint">Adoptée · 91 %</b></li>
        <li className="flex justify-between gap-2.5 rounded-[14px] border border-brand-2 px-4 py-3.5"><span>Résolution 3 · Renouvellement du mandat</span><b className="whitespace-nowrap font-semibold text-[#aab5ff]">Vote ouvert</b></li>
      </ul>
      <div className="mt-3 text-xs text-[#6f7598]">Illustration · données d’exemple</div>
    </div>
  );
}
