// app/plateforme/Demos.tsx — démonstrations interactives de la page Plateforme
"use client";

import { useState } from "react";
import PhoneFrame from "../components/site/PhoneFrame";

const OPERATORS = [
  { name: "Orange Money", ink: "#c2570a", soft: "#fdeedf" },
  { name: "MTN MoMo", ink: "#8a6a00", soft: "#fff6cc" },
  { name: "Moov Money", ink: "#1a5fb4", soft: "#e3eefc" },
  { name: "Wave", ink: "#1270bd", soft: "#dff1ff" },
];

/** Choix de l'opérateur + écran de paiement correspondant. */
export function PaymentDemo() {
  const [i, setI] = useState(3);
  const op = OPERATORS[i];
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div role="group" aria-label="Opérateur de paiement" className="flex flex-wrap justify-center gap-2">
        {OPERATORS.map((o, k) => (
          <button key={o.name} type="button" onClick={() => setI(k)} aria-pressed={k === i}
            className={`min-h-11 rounded-full border px-[18px] font-semibold transition-all ${k === i ? "border-[#eceefa] bg-[#eceefa] text-night" : "border-white/20 text-[#eceefa] hover:border-white/50"}`}>
            {o.name}
          </button>
        ))}
      </div>
      <PhoneFrame className="sd-tilt">
        <div className="text-xs text-slate">Paiement</div>
        <div className="text-xl font-semibold leading-tight tracking-[-0.03em]">Cérémonie des Trophées de l’Entrepreneuriat</div>
        <div className="flex justify-between rounded-2xl border border-[#e3e5f0] p-3.5 text-sm"><span>Billet invité × 2</span><b className="font-semibold">30 000 FCFA</b></div>
        <div className="rounded-2xl p-4 transition-colors duration-500" style={{ background: op.soft }}>
          <div className="text-xs text-[#3a3f5c]">Payer avec</div>
          <div className="mt-1 text-xl font-bold" style={{ color: op.ink }}>{op.name}</div>
          <div className="mt-2 text-[13px] text-[#3a3f5c]">Confirmez le paiement sur votre téléphone.</div>
        </div>
        <div className="mt-auto grid h-[50px] place-items-center rounded-full font-semibold text-white transition-colors duration-500" style={{ background: op.ink }}>Payer 30 000 FCFA</div>
      </PhoneFrame>
    </div>
  );
}

const THEMES = [
  { label: "Indigo", swatch: "#4155c9", bg: "linear-gradient(135deg,#4155c9,#6e7ff3)", fg: "#fff", btn: "#fff", btnFg: "#4155c9" },
  { label: "Or", swatch: "#c9a43c", bg: "linear-gradient(135deg,#1d1a12,#4a3b14)", fg: "#f6e7b8", btn: "#e6c463", btnFg: "#1d1a12" },
  { label: "Corail", swatch: "#ef9f86", bg: "linear-gradient(135deg,#f2b48c,#efa7b5)", fg: "#2a1520", btn: "#2a1520", btnFg: "#fff" },
  { label: "Vert", swatch: "#23795e", bg: "linear-gradient(135deg,#0f5c4a,#2c8a6c)", fg: "#e6f6f0", btn: "#e6f6f0", btnFg: "#0f5c4a" },
];

/** Aperçu d'un site d'événement dont on change les couleurs. */
export function SiteThemeDemo() {
  const [i, setI] = useState(0);
  const t = THEMES[i];
  return (
    <div className="sd-up w-full overflow-hidden rounded-[22px] border border-ink/[.08] bg-white shadow-[0_50px_100px_-50px_rgba(14,16,36,.45)]">
      <div className="flex items-center gap-1.5 border-b border-ink/5 px-3.5 py-3">
        <span className="h-[9px] w-[9px] rounded-full bg-pink" /><span className="h-[9px] w-[9px] rounded-full bg-peach" /><span className="h-[9px] w-[9px] rounded-full bg-mint" />
        <span className="ml-2.5 truncate text-[11px] text-slate">trophees.myquorumevent.com</span>
      </div>
      <div className="p-[26px] transition-[background] duration-500" style={{ background: t.bg, color: t.fg }}>
        <div className="text-xs opacity-80">3 décembre 2026 · Abidjan</div>
        <div className="mt-2 text-[26px] font-bold leading-[1.1] tracking-[-0.03em]">Cérémonie des Trophées de l’Entrepreneuriat</div>
        <div className="mt-4 inline-flex rounded-full px-[18px] py-2.5 text-[13px] font-semibold" style={{ background: t.btn, color: t.btnFg }}>Réserver ma place</div>
      </div>
      <div className="flex flex-wrap items-center gap-2.5 px-[26px] py-[18px]">
        <span className="text-[13px] text-slate">Couleurs :</span>
        {THEMES.map((th, k) => (
          <button key={th.label} type="button" onClick={() => setI(k)} aria-label={`Thème ${th.label}`} aria-pressed={k === i}
            className={`h-8 w-8 rounded-full border-[3px] ${k === i ? "border-ink" : "border-transparent"}`} style={{ background: th.swatch }} />
        ))}
      </div>
    </div>
  );
}
