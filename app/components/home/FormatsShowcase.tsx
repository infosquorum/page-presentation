// app/components/home/FormatsShowcase.tsx — panneaux qui s'agrandissent au survol
"use client";

import Link from "next/link";
import { useState } from "react";
import { FORMATS, IMAGES, ROUTES } from "@/lib/site";
import { ArrowIcon } from "../site/Icons";

const PANELS = [
  { title: "Assemblées générales", text: "Convocations, émargement, quorum et votes des résolutions en temps réel. Notre expertise historique.", image: IMAGES.sgci, href: ROUTES.ag },
  ...FORMATS.map((f) => ({ title: f.title, text: f.intro, image: f.image, href: `${ROUTES.prestations}#${f.id}` })),
];

export default function FormatsShowcase() {
  const [open, setOpen] = useState(0);
  return (
    <section id="formats" className="px-5 pb-[140px] pt-10 sm:px-6">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-[clamp(40px,6vw,88px)] font-semibold leading-[.92] tracking-[-0.06em]">
            Tous vos formats.<br /><span className="text-[#8a8fae]">Une seule plateforme.</span>
          </h2>
          <p className="max-w-[380px] text-[17px] leading-relaxed text-slate">De l’assemblée générale à la soirée de gala, chaque format a ses modules et son équipe.</p>
        </div>
        <ul className="mt-14 flex flex-col gap-3 lg:h-[600px] lg:flex-row">
          {PANELS.map((p, i) => {
            const isOpen = open === i;
            return (
              <li key={p.title} className={`relative min-w-0 transition-[flex-grow,height] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] ${isOpen ? "h-[440px] lg:h-auto lg:flex-[4_1_0]" : "h-[200px] lg:h-auto lg:flex-[1_1_0]"}`}>
                <Link href={p.href} onMouseEnter={() => setOpen(i)} onFocus={() => setOpen(i)}
                  className="relative block h-full overflow-hidden rounded-[26px] text-white">
                  <img src={p.image} alt="" className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ${isOpen ? "scale-[1.02]" : "scale-[1.12]"}`} />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,26,.05),rgba(7,8,26,.15)_40%,rgba(7,8,26,.85))]" />
                  <span className="absolute inset-x-[22px] bottom-[22px] block">
                    <span className="block text-[13px] tabular-nums opacity-80">0{i + 1}</span>
                    <span className={`mt-1.5 block font-semibold leading-tight tracking-[-0.03em] ${isOpen ? "text-[30px]" : "text-lg"}`}>{p.title}</span>
                    {isOpen && <>
                      <span className="q-word mt-2.5 block max-w-[420px] text-base leading-normal opacity-90">{p.text}</span>
                      <span className="q-word mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-[18px] text-sm font-semibold text-night">Découvrir <ArrowIcon /></span>
                    </>}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
