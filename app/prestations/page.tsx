// app/prestations/page.tsx — autres événements, une section par format
import type { Metadata } from "next";
import Link from "next/link";
import { FORMATS, IMAGES, ROUTES, serviceTitle } from "@/lib/site";
import { ArrowIcon, CheckIcon } from "../components/site/Icons";
import SubNav from "../components/site/SubNav";

export const metadata: Metadata = {
  title: "Nos prestations",
  description: "Conférences, cérémonies, séminaires, forums, conventions et soirées d’entreprise : une plateforme et une équipe pour chaque format.",
};

export default function PrestationsPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-14 pt-12 sm:px-6 sm:pt-[72px]">
        <div aria-hidden className="absolute -right-[10%] top-[-160px] h-[560px] w-[min(760px,140vw)] rounded-full bg-[radial-gradient(closest-side,rgba(185,169,238,.5),transparent)] blur-[30px]" />
        <div className="relative mx-auto flex max-w-[1240px] flex-col gap-10 lg:flex-row lg:items-end">
          <div className="lg:w-3/5">
            <nav aria-label="Fil d’Ariane" className="text-sm text-slate"><Link href={ROUTES.home} className="text-slate">Accueil</Link> / <span className="text-ink">Nos prestations</span></nav>
            <h1 className="mt-5 text-[clamp(52px,9vw,136px)] font-semibold leading-[.88] tracking-[-0.065em]">Nos prestations.</h1>
            <p className="mt-6 max-w-[560px] text-[clamp(17px,2vw,20px)] leading-relaxed text-slate">Six formats d’événements d’entreprise et grand public, une même plateforme et une équipe présente le jour J.</p>
          </div>
          <Link href={ROUTES.ag} className="q-zoom relative flex min-h-[240px] w-full flex-col justify-end overflow-hidden rounded-[26px] p-[22px] text-white lg:w-2/5">
            <img src={IMAGES.sgci} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute inset-0 bg-[linear-gradient(transparent_25%,rgba(7,8,26,.88))]" />
            <span className="relative text-[13px] opacity-85">Vous organisez une assemblée générale ?</span>
            <span className="relative mt-1.5 inline-flex items-center gap-2.5 text-[22px] font-semibold tracking-[-0.03em]">Voir notre page dédiée <ArrowIcon /></span>
          </Link>
        </div>
      </section>

      <SubNav label="Formats d’événement" items={FORMATS.map((f) => ({ id: f.id, label: f.short }))} />

      {FORMATS.map((f, i) => {
        const dark = i % 2 === 1;
        return (
          <section key={f.id} id={f.id} className={`px-5 py-[88px] sm:px-6 sm:py-[130px] ${dark ? "bg-night text-[#eceefa]" : ""}`}>
            <div className={`mx-auto flex max-w-[1240px] flex-col items-center gap-8 lg:gap-20 ${dark ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
              <div className="q-zoom sd-up relative aspect-[4/5] max-h-[640px] w-full overflow-hidden rounded-[30px] lg:w-1/2">
                <img src={f.image} alt="" loading="lazy" className="sd-par h-full w-full object-cover" />
                <span className="absolute left-[18px] top-[18px] rounded-full bg-white/90 px-3.5 py-[7px] text-[13px] font-semibold text-ink">{f.title}</span>
              </div>
              <div className="lg:w-1/2">
                <span className={`text-sm font-medium tabular-nums ${dark ? "text-glow" : "text-brand"}`}>0{i + 1} / 0{FORMATS.length}</span>
                <h2 className="mt-3.5 text-[clamp(34px,4.4vw,60px)] font-semibold leading-none tracking-[-0.05em]">{f.headline}</h2>
                <p className={`mt-[18px] max-w-[520px] text-lg leading-relaxed ${dark ? "text-haze" : "text-slate"}`}>{f.intro}</p>
                <ul className="mt-[26px] flex flex-col gap-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[17px] leading-normal"><CheckIcon className={`mt-[3px] shrink-0 ${dark ? "text-glow" : "text-brand"}`} />{p}</li>
                  ))}
                </ul>
                <div className={`mt-[26px] text-[13px] ${dark ? "text-haze" : "text-slate"}`}>Modules utilisés</div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {f.modules.map((m) => (
                    <Link key={m} href={`${ROUTES.plateforme}#${m}`} className={`q-btn inline-flex min-h-10 items-center rounded-full border px-3.5 text-sm ${dark ? "border-white/[.18] text-[#eceefa]" : "border-ink/[.12] text-ink"}`}>{serviceTitle(m)}</Link>
                  ))}
                </div>
                <Link href={ROUTES.demo} className={`q-btn mt-[30px] inline-flex min-h-[52px] items-center gap-2.5 rounded-full px-6 font-semibold ${dark ? "bg-white text-night" : "bg-brand text-white"}`}>
                  Organiser mon événement <ArrowIcon />
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
