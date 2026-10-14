// app/assemblees-generales/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { AG_REFERENCES, IMAGES, ROUTES, SHAREHOLDER_SPACE_URL } from "@/lib/site";
import { ArrowIcon } from "../components/site/Icons";
import QuorumDemo from "./QuorumDemo";

export const metadata: Metadata = {
  title: "Assemblées générales",
  description: "Convocation, émargement, quorum en temps réel, vote des résolutions et procès-verbal : Quorum Event accompagne vos assemblées générales.",
};

const TILES = [
  ["Convocation et inscription", "Les actionnaires reçoivent leur convocation et confirment leur présence ou leur procuration en ligne."],
  ["Émargement par scan", "Chaque actionnaire est identifié à l’entrée, son nombre d’actions est pris en compte immédiatement."],
  ["Quorum en temps réel", "Le quorum se calcule à chaque entrée et s’affiche en salle, sans attendre le dépouillement."],
  ["Vote des résolutions", "Pour, contre, abstention : chaque résolution est votée sur boîtier ou téléphone, résultat immédiat."],
  ["AG hybride", "Les actionnaires à distance suivent la séance en direct et votent depuis chez eux."],
  ["Procès-verbal et bilan", "Présences, quorum et résultats des votes, réunis dans un rapport prêt pour le procès-verbal."],
];

export default function AssembleesGeneralesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-night text-[#eceefa]">
        <div className="relative h-[620px] sm:h-[820px]">
          <img src={IMAGES.sgci} alt="Tribune de l’assemblée générale de la Société Générale de Côte d’Ivoire" className="sd-par absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,26,.5),rgba(7,8,26,.3)_40%,#07081a)]" />
          <div className="relative mx-auto flex h-full max-w-[1240px] flex-col justify-end px-5 py-[72px] sm:px-6">
            <nav aria-label="Fil d’Ariane" className="text-sm text-[#b9bedc]"><Link href={ROUTES.home} className="text-[#b9bedc]">Accueil</Link> / <span className="text-white">Assemblées générales</span></nav>
            <h1 className="mt-[18px] text-[clamp(52px,9.4vw,144px)] font-semibold leading-[.86] tracking-[-0.065em]">Assemblées<br />générales.</h1>
            <p className="mt-6 max-w-[580px] text-[clamp(17px,2vw,21px)] leading-normal text-[#c6cae4]">
              De la convocation au procès-verbal : émargement, quorum et votes des résolutions en temps réel. Notre expertise historique, au service de vos actionnaires.
            </p>
            <div className="mt-[34px] flex flex-col gap-3 sm:flex-row">
              <Link href={ROUTES.demo} className="q-btn inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-full bg-white px-[26px] font-semibold text-night">Organiser votre AG <ArrowIcon /></Link>
              {SHAREHOLDER_SPACE_URL && (
                <a href={SHAREHOLDER_SPACE_URL} className="q-btn inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/30 bg-white/[.08] px-6 font-medium text-white">Vous êtes actionnaire ? Accéder à votre espace</a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-night px-5 pb-[88px] pt-10 text-[#eceefa] sm:px-6 sm:pb-[140px]">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 lg:flex-row lg:gap-20">
          <div className="lg:w-[45%]">
            <h2 className="text-[clamp(34px,4.6vw,64px)] font-semibold leading-none tracking-[-0.05em]">Le quorum, à la seconde près.</h2>
            <p className="mt-[18px] max-w-[460px] text-lg leading-relaxed text-haze">Chaque actionnaire scanné à l’entrée fait avancer la jauge. Le bureau sait exactement quand la séance peut s’ouvrir.</p>
          </div>
          <div className="w-full lg:w-[55%]"><QuorumDemo /></div>
        </div>
      </section>

      <section className="bg-night px-5 pb-[88px] text-[#eceefa] sm:px-6 sm:pb-[150px]">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="max-w-[820px] text-[clamp(34px,4.6vw,64px)] font-semibold leading-none tracking-[-0.05em]">Tout ce que nous gérons, de la convocation au procès-verbal.</h2>
          <ol className="mt-[52px] grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {TILES.map(([t, d], i) => (
              <li key={t} className="sd-up flex min-h-[220px] flex-col rounded-3xl border border-white/10 bg-white/[.03] p-7">
                <span className="text-sm tabular-nums text-glow">0{i + 1}</span>
                <span className="mt-auto text-[22px] font-semibold tracking-[-0.03em]">{t}</span>
                <span className="mt-2 text-[15px] leading-relaxed text-haze">{d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-[88px] sm:py-[150px]">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-5 px-5 sm:px-6 md:flex-row md:items-end">
          <h2 className="text-[clamp(34px,4.6vw,64px)] font-semibold leading-none tracking-[-0.05em]">Ils nous ont confié<br />leur assemblée.</h2>
          <p className="max-w-[360px] text-base leading-relaxed text-slate">Des sociétés cotées et de grands groupes ivoiriens, accompagnés sur place à Abidjan.</p>
        </div>
        <ul className="mt-11 flex snap-x snap-mandatory gap-[18px] overflow-x-auto px-5 pb-3 [scrollbar-width:none] sm:px-[max(24px,calc((100%-1192px)/2))]">
          {AG_REFERENCES.map((r) => (
            <li key={r.client} className="q-zoom w-[min(320px,80vw)] shrink-0 snap-start">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl"><img src={r.image} alt="" loading="lazy" className="h-full w-full object-cover" /></div>
              <div className="mt-3.5 text-[13px] text-slate">{r.date} · Abidjan</div>
              <div className="mt-1 text-[19px] font-semibold tracking-[-0.02em]">Assemblée générale {r.label}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
