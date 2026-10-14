// app/components/home/Parcours.tsx — défilement épinglé : le téléphone change d'écran à chaque étape
"use client";

import { useEffect, useRef, useState } from "react";
import { IMAGES } from "@/lib/site";
import { CheckIcon } from "../site/Icons";
import PhoneFrame from "../site/PhoneFrame";
import QrGrid from "../site/QrGrid";

const STEPS = [
  { title: "Il réserve sa place.", text: "Quelques champs depuis son téléphone. La confirmation arrive aussitôt, avec son billet.", glow: "rgba(185,169,238,.55)", kicker: "Ma réservation" },
  { title: "Il paie avec son mobile.", text: "Orange Money, MTN, Moov ou Wave. Le paiement est rapproché automatiquement, sans saisie.", glow: "rgba(143,211,190,.5)", kicker: "Paiement" },
  { title: "Il entre en un scan.", text: "Son invitation s’affiche sans impression. Un scan à l’entrée, et l’équipe sait où l’installer.", glow: "rgba(242,180,140,.5)", kicker: "Mon invitation" },
  { title: "Il participe.", text: "Vote du public, questions aux intervenants, sondages : la salle réagit depuis le téléphone, en direct.", glow: "rgba(110,127,243,.6)", kicker: "Vote du public" },
  { title: "Vous avez le bilan.", text: "Présences, billetterie et participation, réunies dans un rapport prêt à partager le soir même.", glow: "rgba(239,167,181,.5)", kicker: "Bilan" },
];

function Screen({ step }: { step: number }) {
  switch (step) {
    case 0: return (
      <div key={0} className="q-word flex flex-col gap-2.5">
        <div className="rounded-xl border border-[#e3e5f0] px-3 py-2.5"><div className="text-[10px] text-[#8a8fae]">Prénom et nom</div><div className="text-sm">Awa Koné</div></div>
        <div className="rounded-xl border border-[#e3e5f0] px-3 py-2.5"><div className="text-[10px] text-[#8a8fae]">Téléphone</div><div className="text-sm">+225 07 •• •• •• 12</div></div>
        <div className="rounded-xl border-2 border-brand px-[11px] py-[9px]"><div className="text-[10px] text-brand">Billet</div><div className="text-sm">Invité · 1 place</div></div>
        <div className="mt-1.5 grid h-12 place-items-center rounded-full bg-brand text-sm font-semibold text-white">Réserver ma place</div>
      </div>);
    case 1: return (
      <div key={1} className="q-word flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
          {["Orange Money", "MTN MoMo", "Moov Money"].map((o) => <span key={o} className="rounded-xl border border-[#e3e5f0] p-3">{o}</span>)}
          <span className="rounded-xl border-2 border-brand p-[11px] text-brand">Wave</span>
        </div>
        <div className="mt-2.5 flex items-center gap-3 rounded-[20px] bg-[#e6f6f0] p-[18px]">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#23795e] text-white"><CheckIcon size={18} /></span>
          <span><span className="block text-[11px] text-[#3a3f5c]">Billet payé</span><b className="text-[19px] font-semibold">15 000 FCFA</b></span>
        </div>
      </div>);
    case 2: return (
      <div key={2} className="q-word flex flex-col items-center gap-3 rounded-3xl bg-[linear-gradient(160deg,#fbe6d8,#f7d9e1)] p-[22px]">
        <div className="w-[156px] rounded-[14px] bg-white p-2.5"><QrGrid /></div>
        <b className="text-[17px] font-semibold">Awa Koné</b>
        <span className="text-xs text-[#3a3f5c]">Invitée · Table 12</span>
      </div>);
    case 3: return (
      <div key={3} className="q-word flex flex-col gap-2.5">
        <div className="text-[13px] text-[#3a3f5c]">Prix du public · Votez pour votre lauréat</div>
        <div className="flex h-[54px] items-center justify-between rounded-2xl bg-brand px-4 font-semibold text-white">[Candidat A] <CheckIcon /></div>
        <div className="flex h-[54px] items-center rounded-2xl border border-[#e3e5f0] px-4 font-semibold">[Candidat B]</div>
        <div className="flex h-[54px] items-center rounded-2xl border border-[#e3e5f0] px-4 font-semibold">[Candidat C]</div>
      </div>);
    default: return (
      <div key={4} className="q-word flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-[14px] bg-cloud p-3"><span className="text-[10px] text-slate">Présents</span><b className="block text-2xl font-semibold">412</b></div>
          <div className="rounded-[14px] bg-cloud p-3"><span className="text-[10px] text-slate">Votes</span><b className="block text-2xl font-semibold">1 208</b></div>
        </div>
        <div className="rounded-[14px] bg-cloud p-3"><span className="text-[10px] text-slate">Billetterie</span><b className="block text-2xl font-semibold">[MONTANT] FCFA</b></div>
        <div className="grid h-12 place-items-center rounded-full bg-ink text-sm font-semibold text-white">Exporter le bilan</div>
      </div>);
  }
}

export default function Parcours() {
  const [step, setStep] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setStep(Number((e.target as HTMLElement).dataset.step)); }),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const cur = STEPS[step];

  return (
    <section id="parcours" className="relative bg-night text-[#eceefa]">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <img src={IMAGES.audience} alt="" className="h-full w-full object-cover opacity-[.12] grayscale" />
        <div className="absolute inset-0 bg-[linear-gradient(#07081a,rgba(7,8,26,.6)_30%,rgba(7,8,26,.6)_70%,#07081a)]" />
      </div>
      <div className="relative mx-auto max-w-[1240px] px-5 pb-10 pt-24 sm:px-6 sm:pt-[150px]">
        <p className="text-[15px] font-medium text-glow">Du premier clic au dernier bilan</p>
        <h2 className="sd-fill q-fill-dark mt-4 max-w-[980px] text-[clamp(34px,5.6vw,80px)] font-semibold leading-none tracking-[-0.05em]">
          Un invité réserve, paie avec son mobile, entre en un scan. Vous, vous voyez tout.
        </h2>
      </div>

      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-12 px-5 pb-24 sm:px-6 sm:pb-[150px] md:flex-row">
        {/* Téléphone épinglé : en haut de l'écran sur mobile, à gauche sur ordinateur */}
        <div className="sticky top-14 z-10 grid h-[420px] place-items-center bg-[linear-gradient(#07081a_85%,rgba(7,8,26,0))] md:top-[90px] md:h-[720px] md:flex-1 md:self-start md:bg-none">
          <div aria-hidden className="q-glow absolute aspect-square w-[min(520px,100%)] rounded-full transition-[background] duration-1000" style={{ background: `radial-gradient(closest-side, ${cur.glow}, transparent)` }} />
          <PhoneFrame className="origin-center scale-[.64] md:scale-100">
            <div className="text-xs text-slate">{cur.kicker}</div>
            <div className="text-[21px] font-semibold leading-tight tracking-[-0.03em]">Cérémonie des Trophées de l’Entrepreneuriat</div>
            <Screen step={step} />
          </PhoneFrame>
        </div>

        <ol className="min-w-0 md:flex-1">
          {STEPS.map((s, i) => {
            const on = i === step;
            return (
              <li key={i} ref={(el) => { refs.current[i] = el; }} data-step={i} className="flex min-h-[72vh] items-end pb-8 md:min-h-[540px] md:items-center md:pb-0">
                <button type="button" onClick={() => setStep(i)} aria-current={on ? "step" : undefined}
                  className={`text-left transition-[opacity,transform] duration-500 ${on ? "opacity-100" : "-translate-x-2 opacity-30"}`}>
                  <span className={`inline-flex items-center gap-2.5 text-sm font-medium tabular-nums ${on ? "text-glow" : "text-[#5a5f88]"}`}>
                    <span className={`h-px w-7 ${on ? "bg-glow" : "bg-[#5a5f88]"}`} />Étape 0{i + 1}
                  </span>
                  <span className="mt-[18px] block text-[clamp(30px,3.8vw,52px)] font-semibold leading-none tracking-[-0.045em]">{s.title}</span>
                  <span className="mt-4 block max-w-[440px] text-lg leading-relaxed text-haze">{s.text}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
