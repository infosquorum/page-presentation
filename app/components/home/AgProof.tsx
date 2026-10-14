// app/components/home/AgProof.tsx — l'expertise AG en un bloc, renvoi vers la page dédiée
import Link from "next/link";
import { IMAGES, ROUTES } from "@/lib/site";
import { ArrowIcon } from "../site/Icons";

const PHOTOS = [
  { src: IMAGES.sgci, alt: "Tribune de l’assemblée générale de la Société Générale CI" },
  { src: IMAGES.saph, alt: "Vote à main levée à l’assemblée de SAPH" },
  { src: IMAGES.sucrivoire, alt: "Conseil de Sucrivoire en assemblée générale" },
  { src: IMAGES.assembly, alt: "Salle d’assemblée comble" },
];

export default function AgProof() {
  return (
    <section className="px-5 pb-[140px] sm:px-6">
      <div className="mx-auto flex max-w-[1240px] flex-col overflow-hidden rounded-[32px] border border-ink/[.07] bg-white lg:flex-row">
        <div className="flex flex-col justify-center p-7 sm:p-14 lg:w-1/2">
          <p className="text-sm font-medium text-brand">Assemblées générales</p>
          <h2 className="mt-3 text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.05] tracking-[-0.045em]">Les assemblées générales, notre expertise historique.</h2>
          <p className="mt-[18px] text-[17px] leading-relaxed text-slate">
            Émargement des actionnaires, quorum en temps réel, votes des résolutions et procès-verbal : Société Générale CI, Orange CI, SAPH, Sucrivoire et Nestlé nous ont confié leurs assemblées.
          </p>
          <Link href={ROUTES.ag} className="q-btn mt-7 inline-flex min-h-[50px] items-center gap-2.5 self-start rounded-full bg-ink px-[22px] font-medium text-white">
            Découvrir nos assemblées générales <ArrowIcon />
          </Link>
        </div>
        <div className="grid min-h-[380px] grid-cols-2 gap-1 lg:w-1/2">
          {PHOTOS.map((p) => (
            <div key={p.src} className="q-zoom overflow-hidden"><img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
