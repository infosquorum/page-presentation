// app/plateforme/page.tsx — une section par brique de la plateforme
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { IMAGES, ROUTES, SERVICES, formatTitle, type FormatId, type ServiceId } from "@/lib/site";
import { CheckIcon } from "../components/site/Icons";
import QrGrid from "../components/site/QrGrid";
import SubNav from "../components/site/SubNav";
import { PaymentDemo, SiteThemeDemo } from "./Demos";

export const metadata: Metadata = {
  title: "La plateforme",
  description: "Billetterie mobile, inscriptions et accès, votes en direct, retransmission, statistiques et site d’événement : six briques qui se parlent.",
};

type Section = { id: ServiceId; title: string; text: string; points: string[]; usedBy: FormatId[]; ag?: boolean; visual: ReactNode };

const SECTIONS: Section[] = [
  { id: "billetterie", title: "Vendez vos billets là où vos invités paient déjà.",
    text: "Un lien, un téléphone, un paiement mobile. Le billet arrive aussitôt, et la vente apparaît dans votre tableau de bord.",
    points: ["Plusieurs types de billets : invité, VIP, table", "Quantités limitées, mises à jour à chaque vente", "Billet et reçu envoyés dès le paiement validé", "Événements gratuits gérés de la même façon"],
    usedBy: ["conferences", "ceremonies", "conventions"], visual: <PaymentDemo /> },
  { id: "acces", title: "Un scan, une entrée.",
    text: "Le badge ou le billet s’affiche sur le téléphone de l’invité. Votre équipe le scanne, la présence est comptée.",
    points: ["Formulaire d’inscription adapté à votre événement", "Badge nominatif sans impression", "Plusieurs entrées scannées en parallèle", "Présences visibles en temps réel"],
    usedBy: ["conferences", "seminaires", "forums", "soirees"], ag: true,
    visual: (
      <div className="sd-up flex w-[min(420px,100%)] flex-col items-center gap-4 rounded-[30px] bg-[linear-gradient(160deg,#fbe6d8,#f7d9e1)] p-8">
        <div className="w-[210px] rounded-[18px] bg-white p-3.5"><QrGrid gap={5} /></div>
        <div className="flex items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-4">
          <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#23795e] text-white"><CheckIcon /></span>
          <b className="font-semibold">Entrée validée · 19:42</b>
        </div>
      </div>
    ) },
  { id: "interactions", title: "La salle réagit en direct.",
    text: "Votes du public, questions aux intervenants, sondages : depuis le téléphone, affichés à l’écran.",
    points: ["Vote du public et palmarès en direct", "Questions votées par la salle", "Sondages et quiz pendant les sessions", "Votes des résolutions pour vos AG"],
    usedBy: ["ceremonies", "conferences", "soirees"], ag: true,
    visual: (
      <div className="sd-up w-[min(460px,100%)] rounded-[28px] border border-white/10 bg-night-2 p-7">
        <div className="text-[13px] text-haze">Prix du public · résultats en direct</div>
        <div className="mt-[22px] flex flex-col gap-3.5 text-sm">
          {[["[Candidat A]", 48, "linear-gradient(90deg,#6e7ff3,#4155c9)"], ["[Candidat B]", 33, "#6e7ff3"], ["[Candidat C]", 19, "#b9a9ee"]].map(([l, v, c]) => (
            <div key={l as string}>
              <div className="flex justify-between"><span>{l}</span><b className="font-semibold">{v} %</b></div>
              <div className="mt-1.5 h-2 rounded-full bg-[#1c2046]"><div className="h-full rounded-full" style={{ width: `${v}%`, background: c as string }} /></div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl bg-white/[.04] p-4 text-sm">
          <span className="text-xs text-haze">Question la plus votée</span>
          <div className="mt-1.5 font-medium">« Comment financer un projet à impact local ? »</div>
        </div>
      </div>
    ) },
  { id: "retransmission", title: "Ceux qui ne sont pas dans la salle suivent aussi.",
    text: "Vos sessions diffusées en ligne, pour un public à distance ou des événements hybrides.",
    points: ["Diffusion des plénières et des keynotes", "Intervenants à distance sans installation", "Participation hybride, sur place et en ligne", "Replays après l’événement"],
    usedBy: ["conferences", "conventions"], ag: true,
    visual: (
      <div className="sd-up relative aspect-[16/10] w-full overflow-hidden rounded-[26px] shadow-[0_50px_100px_-50px_rgba(14,16,36,.5)]">
        <img src={IMAGES.auditorium} alt="Retransmission d’une session plénière" loading="lazy" className="h-full w-full object-cover" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-lg bg-[#e5484d] px-2.5 py-1.5 text-xs font-bold text-white"><span className="q-rec h-[7px] w-[7px] rounded-full bg-white" />EN DIRECT</span>
        <span className="absolute inset-x-0 bottom-0 h-[5px] bg-white/25"><span className="block h-full w-[64%] bg-[#e5484d]" /></span>
      </div>
    ) },
  { id: "statistiques", title: "Le pouls de l’événement, minute par minute.",
    text: "Inscriptions, ventes, arrivées et participation : tout se suit pendant l’événement, le bilan est prêt à la clôture.",
    points: ["Tableau de bord en temps réel", "Arrivées par heure et par entrée", "Participation aux sessions et aux votes", "Bilan exportable à la clôture"],
    usedBy: ["conventions", "forums", "seminaires"], ag: true,
    visual: (
      <div className="sd-up w-full rounded-[26px] border border-white/10 bg-night-2 p-[26px]">
        <div className="grid grid-cols-3 gap-3">
          {[["Arrivés", "412"], ["Billets", "468"], ["Votes", "1 208"]].map(([l, v]) => (
            <div key={l}><div className="text-xs text-haze">{l}</div><div className="mt-1.5 text-[32px] font-semibold tabular-nums tracking-[-0.04em]">{v}</div></div>
          ))}
        </div>
        <div className="relative mt-5 h-[150px] overflow-hidden rounded-[14px] border border-white/[.08]">
          <svg aria-hidden viewBox="0 0 600 150" preserveAspectRatio="none" className="absolute inset-0 h-full w-full"><path className="q-draw" d="M0 135 C80 130 120 96 180 90 S280 40 340 70 S460 18 520 28 S580 40 600 34" fill="none" stroke="#8f9cff" strokeWidth="2.5" /></svg>
          <span className="q-beam absolute inset-y-0 w-2/5 bg-[linear-gradient(90deg,transparent,rgba(143,156,255,.22),transparent)]" />
        </div>
        <div className="mt-2.5 text-xs text-[#6f7598]">Données d’exemple</div>
      </div>
    ) },
  { id: "site", title: "Un site d’événement à vos couleurs.",
    text: "Chaque événement a son adresse, son programme et son formulaire d’inscription, à votre image.",
    points: ["Logo, couleurs et visuels personnalisés", "Programme, intervenants et partenaires", "Inscription et billetterie intégrées", "Votre adresse : nom.myquorumevent.com"],
    usedBy: ["forums", "ceremonies", "seminaires"], visual: <SiteThemeDemo /> },
];

export default function PlateformePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-16 pt-12 text-center sm:px-6 sm:pt-[72px]">
        <div aria-hidden className="q-gridbg q-grid absolute inset-0" />
        <div className="relative mx-auto max-w-[1000px]">
          <nav aria-label="Fil d’Ariane" className="text-sm text-slate"><Link href={ROUTES.home} className="text-slate">Accueil</Link> / <span className="text-ink">La plateforme</span></nav>
          <h1 className="mt-5 text-[clamp(52px,9vw,136px)] font-semibold leading-[.88] tracking-[-0.065em]">La plateforme.</h1>
          <p className="mx-auto mt-6 max-w-[600px] text-[clamp(17px,2vw,21px)] leading-relaxed text-slate">
            Six briques qui se parlent : le billet payé active l’invitation, l’invitation ouvre la porte, chaque entrée remonte au tableau de bord.
          </p>
        </div>
      </section>

      <SubNav label="Briques de la plateforme" items={SERVICES.map((s) => ({ id: s.id, label: s.short }))} />

      {SECTIONS.map((s, i) => {
        const dark = i % 2 === 0;
        const chip = `q-btn inline-flex min-h-10 items-center rounded-full border px-3.5 text-sm ${dark ? "border-white/[.18] text-[#eceefa]" : "border-ink/[.12] text-ink"}`;
        return (
          <section key={s.id} id={s.id} className={`relative overflow-hidden px-5 py-[88px] sm:px-6 sm:py-[130px] ${dark ? "bg-night text-[#eceefa]" : ""}`}>
            <div className={`mx-auto flex max-w-[1240px] flex-col items-center gap-10 lg:gap-20 ${dark ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
              <div className="lg:w-1/2">
                <span className={`text-sm font-medium ${dark ? "text-glow" : "text-brand"}`}>{SERVICES.find((x) => x.id === s.id)!.title}</span>
                <h2 className="mt-3.5 text-[clamp(34px,4.4vw,60px)] font-semibold leading-none tracking-[-0.05em]">{s.title}</h2>
                <p className={`mt-[18px] max-w-[520px] text-lg leading-relaxed ${dark ? "text-haze" : "text-slate"}`}>{s.text}</p>
                <ul className="mt-[26px] flex flex-col gap-3">
                  {s.points.map((p) => <li key={p} className="flex items-start gap-3 text-[17px] leading-normal"><CheckIcon className={`mt-[3px] shrink-0 ${dark ? "text-glow" : "text-brand"}`} />{p}</li>)}
                </ul>
                <div className={`mt-[26px] text-[13px] ${dark ? "text-haze" : "text-slate"}`}>Utilisé pour</div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {s.ag && <Link href={ROUTES.ag} className={chip}>Assemblées générales</Link>}
                  {s.usedBy.map((f) => <Link key={f} href={`${ROUTES.prestations}#${f}`} className={chip}>{formatTitle(f)}</Link>)}
                </div>
              </div>
              <div className="grid min-h-[420px] w-full place-items-center lg:w-1/2">{s.visual}</div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
