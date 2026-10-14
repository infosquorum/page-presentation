// app/components/home/TempsForts.tsx
"use client";

import { Check, Vote } from "lucide-react";

const QR = [
  "1101011", "1111011", "1011101", "0000000", "1011011", "1110110", "1100000",
];

function MiniQr() {
  return (
    <div className="grid grid-cols-7 gap-[3px]" aria-hidden>
      {QR.join("").split("").map((c, i) => (
        <span key={i} className={`h-2.5 w-2.5 rounded-[2px] ${c === "1" ? "bg-[var(--qe-on-pastel)]" : "bg-black/10"}`} />
      ))}
    </div>
  );
}

const CARDS = [
  {
    title: "Une inscription en trois minutes.",
    color: "var(--qe-lavender)",
    body: (
      <div className="space-y-2.5 rounded-2xl bg-white/60 p-4">
        <div className="h-2.5 w-1/2 rounded-full bg-black/10" />
        <div className="h-8 rounded-lg bg-white" />
        <div className="h-8 rounded-lg bg-white" />
        <div className="rounded-full bg-[#4155c9] py-2 text-center text-xs font-semibold text-white">Je m&apos;inscris</div>
      </div>
    ),
  },
  {
    title: "Payer avec son mobile, simplement.",
    color: "var(--qe-mint)",
    body: (
      <div>
        <div className="mb-3 flex flex-wrap gap-2">
          {["Orange Money", "MTN", "Moov", "Wave"].map((m) => (
            <span key={m} className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold">{m}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-4">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#4155c9] text-white"><Check size={16} aria-hidden /></span>
          <span><span className="block text-[11px] opacity-70">Paiement confirmé</span><span className="font-semibold">25 000 FCFA</span></span>
        </div>
      </div>
    ),
  },
  {
    title: "Un badge, un scan, une entrée.",
    color: "var(--qe-peach)",
    body: (
      <div className="flex items-center gap-4 rounded-2xl bg-white/70 p-4">
        <MiniQr />
        <span><span className="block text-[11px] opacity-70">Badge nominatif</span><span className="block font-semibold">Prénom Nom</span><span className="text-[11px] opacity-70">Actionnaire</span></span>
      </div>
    ),
  },
  {
    title: "Voter en séance, résultat immédiat.",
    color: "var(--qe-blue)",
    body: (
      <div className="rounded-2xl bg-white/70 p-4 text-xs">
        <p className="mb-2 flex items-center gap-2 font-semibold"><Vote size={14} aria-hidden /> Résolution 3</p>
        {[["Pour", 94], ["Contre", 4], ["Abstention", 2]].map(([l, v]) => (
          <div key={l} className="mt-2 flex items-center gap-2">
            <span className="w-20">{l}</span>
            <div className="h-1.5 flex-1 rounded-full bg-black/10"><div className="h-full rounded-full bg-[#4155c9]" style={{ width: `${v}%` }} /></div>
            <span className="w-8 text-right font-semibold">{v} %</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function TempsForts() {
  return (
    <section id="temps-forts" className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-sm font-medium text-[var(--qe-primary)]">Du premier clic au dernier bilan</p>
        <p className="qe-title mt-4 max-w-3xl text-[clamp(1.75rem,4vw,2.75rem)]">
          Un participant s&apos;inscrit, paie avec son mobile, reçoit son badge. Vous, vous suivez tout en temps réel.
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-6xl px-5">
        <h2 className="qe-title text-4xl">Les temps forts.</h2>
      </div>
      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] lg:px-[max(1.25rem,calc((100vw-72rem)/2))]">
        {CARDS.map((c) => (
          <article
            key={c.title}
            className="flex h-[360px] w-[290px] shrink-0 snap-start flex-col justify-between rounded-[28px] p-6 text-[var(--qe-on-pastel)]"
            style={{ background: c.color }}
          >
            <h3 className="qe-title text-xl">{c.title}</h3>
            {c.body}
          </article>
        ))}
      </div>
    </section>
  );
}
