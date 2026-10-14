// app/a-propos/page.tsx
import type { Metadata } from "next";
import { IMAGES } from "@/lib/site";
import { ArrowIcon } from "../components/site/Icons";

export const metadata: Metadata = { title: "À propos de nous", description: "Notre mission, nos valeurs, notre histoire et nos offres d’emploi." };

const VALUES = [
  { title: "Excellence", text: "Un travail soigné sur chaque événement, du premier échange au bilan.", color: "bg-lavender" },
  { title: "Esprit d’équipe", text: "Nous avançons avec vos équipes, pas à côté d’elles.", color: "bg-mint" },
  { title: "Transparence", text: "Une communication claire, des chiffres partagés en temps réel.", color: "bg-peach" },
];
// TODO : renseigner les années
const HISTORY = [
  { year: "[Année]", text: "Fondation de l’entreprise avec une équipe de passionnés du web." },
  { year: "[Année]", text: "Expansion de l’équipe et ouverture de nouveaux bureaux." },
  { year: "[Année]", text: "Lancement de notre service mobile, récompensé pour son innovation." },
  { year: "Aujourd’hui", text: "Une équipe de professionnels au service de toute la Côte d’Ivoire." },
];
// TODO : remplacer par de vrais témoignages (avec l'accord des clients)
const TESTIMONIALS = [
  { quote: "[Témoignage d’un client : ce que la plateforme a changé pour son événement.]", color: "from-brand-2 to-lavender" },
  { quote: "[Témoignage d’un client sur une assemblée générale.]", color: "from-mint to-brand-2" },
  { quote: "[Témoignage d’un participant ou d’un intervenant.]", color: "from-peach to-pink" },
];
const CAREERS_URL = process.env.NEXT_PUBLIC_CAREERS_URL || "/carriere";

export default function AProposPage() {
  return (
    <main>
      <section className="px-5 pb-16 pt-12 sm:px-6 sm:pt-[72px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[15px] font-medium text-brand">À propos de nous</p>
          <h1 className="mt-[18px] max-w-[1100px] text-[clamp(40px,6.6vw,100px)] font-semibold leading-[.95] tracking-[-0.06em]">Nous rendons les événements plus simples à organiser et plus agréables à vivre.</h1>
        </div>
      </section>
      <div className="sd-reveal relative h-[460px] overflow-hidden sm:h-[700px]">
        <img src={IMAGES.team} alt="L’équipe Quorum Event autour d’un ordinateur" className="sd-par absolute inset-0 h-full w-full object-cover" />
      </div>

      <section className="px-5 py-[88px] sm:px-6 sm:py-[140px]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 lg:flex-row lg:gap-14">
          <h2 className="text-[15px] font-medium text-slate lg:w-[35%]">Notre mission</h2>
          <p className="sd-fill q-fill-light text-[clamp(26px,3.4vw,46px)] font-semibold leading-[1.2] tracking-[-0.035em] lg:w-[65%]">
            Donner aux organisateurs une plateforme unique, de l’inscription au bilan, et à leurs invités une expérience fluide depuis leur téléphone. Nous combinons un outil pensé pour l’Afrique de l’Ouest et une équipe présente sur le terrain le jour J.
          </p>
        </div>
      </section>

      <section className="px-5 pb-[88px] sm:px-6 sm:pb-[140px]">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="mb-10 text-[clamp(34px,4.4vw,60px)] font-semibold leading-none tracking-[-0.05em]">Nos valeurs.</h2>
          <ul className="grid gap-4 md:grid-cols-3">
            {VALUES.map((v) => (
              <li key={v.title} className={`sd-up flex min-h-[280px] flex-col rounded-[26px] p-8 text-ink ${v.color}`}>
                <span className="text-[clamp(26px,3vw,36px)] font-semibold tracking-[-0.04em]">{v.title}</span>
                <span className="mt-auto text-[17px] leading-normal">{v.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-[88px] sm:px-6 sm:py-[140px]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 lg:flex-row lg:gap-14">
          <h2 className="text-[clamp(34px,4.4vw,60px)] font-semibold leading-none tracking-[-0.05em] lg:w-[35%]">Notre histoire.</h2>
          <ol className="lg:w-[65%]">
            {HISTORY.map((h, i) => (
              <li key={i} className="sd-up relative border-l border-ink/[.12] pb-12 pl-10 last:pb-0">
                <span className={`absolute -left-[7px] top-1.5 h-[13px] w-[13px] rounded-full border-[3px] border-white ${i === HISTORY.length - 1 ? "bg-brand" : "bg-[#b4b8d0]"}`} />
                <span className="block text-sm font-semibold text-brand">{h.year}</span>
                <span className="mt-2 block max-w-[560px] text-[clamp(20px,2.4vw,28px)] font-semibold leading-tight tracking-[-0.03em]">{h.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="temoignages" className="bg-night px-5 py-[88px] text-[#eceefa] sm:px-6 sm:py-[140px]">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="text-[clamp(34px,4.4vw,60px)] font-semibold leading-none tracking-[-0.05em]">Ils en parlent mieux que nous.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="sd-up flex min-h-[300px] flex-col gap-7 rounded-[26px] border border-white/10 bg-white/[.03] p-8">
                <blockquote className="text-[clamp(20px,2vw,24px)] font-medium leading-snug tracking-[-0.02em]">« {t.quote} »</blockquote>
                <figcaption className="mt-auto flex items-center gap-3.5">
                  <span className={`h-12 w-12 rounded-full bg-linear-to-br ${t.color}`} />
                  <span className="text-sm text-haze"><b className="block font-semibold text-[#eceefa]">[Nom]</b>[Fonction], [Société]</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="carriere" className="px-5 py-[88px] sm:px-6 sm:py-[140px]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 rounded-[32px] bg-cloud p-7 sm:p-14 md:flex-row md:items-center">
          <div className="flex-1">
            <h2 className="text-[clamp(30px,3.6vw,48px)] font-semibold leading-[1.05] tracking-[-0.045em]">Envie de rejoindre l’équipe ?</h2>
            <p className="mt-3.5 max-w-[460px] text-[17px] leading-relaxed text-slate">Développeurs, chefs de projet événementiel, équipes terrain : nous recrutons des profils passionnés.</p>
          </div>
          <a href={CAREERS_URL} className="q-btn inline-flex min-h-[52px] items-center gap-2.5 self-start rounded-full bg-ink px-6 font-medium text-white md:self-auto">Voir les offres <ArrowIcon /></a>
        </div>
      </section>
    </main>
  );
}
