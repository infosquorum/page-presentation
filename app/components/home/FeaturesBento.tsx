// app/components/home/FeaturesBento.tsx — tuiles avec projecteur qui suit le curseur
import Link from "next/link";
import type { ReactNode } from "react";
import { IMAGES, ROUTES, type ServiceId } from "@/lib/site";
import { Spotlight } from "../site/Interactive";
import QrGrid from "../site/QrGrid";

const TILES: { id: ServiceId; kicker: string; title: string; text: string; wide: boolean; visual: ReactNode }[] = [
  { id: "billetterie", kicker: "Billetterie", title: "Les opérateurs que vos invités utilisent déjà.", text: "Billets, tables, tarifs : encaissement mobile et reçu automatique.", wide: true,
    visual: <span className="flex flex-wrap gap-2 text-[13px]">{["Orange Money", "MTN MoMo", "Moov Money"].map((o) => <span key={o} className="rounded-full border border-white/[.12] px-3.5 py-2">{o}</span>)}<span className="rounded-full bg-[#eceefa] px-3.5 py-2 font-semibold text-night">Wave</span></span> },
  { id: "interactions", kicker: "Interactions", title: "Votes du public et questions en direct.", text: "Le résultat s’affiche à l’écran dès la clôture.", wide: false,
    visual: <span className="flex h-[100px] items-end gap-2.5"><span className="h-[90%] flex-1 rounded-t-[10px] rounded-b bg-[linear-gradient(#6e7ff3,#4155c9)]" /><span className="h-[62%] flex-1 rounded-t-[10px] rounded-b bg-[#3a4290]" /><span className="h-[36%] flex-1 rounded-t-[10px] rounded-b bg-[#2a2e55]" /></span> },
  { id: "acces", kicker: "Accueil", title: "Un scan, une entrée.", text: "Depuis un simple téléphone, sur plusieurs entrées à la fois.", wide: false,
    visual: <span className="flex items-center gap-3"><span className="w-[84px] shrink-0 overflow-hidden rounded-2xl bg-white p-2.5"><QrGrid size={5} gap={3} /></span><span className="text-[13px] leading-relaxed text-haze"><b className="font-semibold text-mint">Invitation valide</b><br />Awa Koné · Table 12<br />Entrée VIP · 19:42</span></span> },
  { id: "retransmission", kicker: "Retransmission", title: "Vos sessions diffusées en ligne.", text: "Ceux qui ne sont pas dans la salle suivent en direct.", wide: true,
    visual: <span className="relative block h-[140px] overflow-hidden rounded-[14px]"><img src={IMAGES.conference} alt="" loading="lazy" className="h-full w-full object-cover opacity-70" /><span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-[#e5484d] px-2 py-1 text-[11px] font-bold text-white"><span className="q-rec h-1.5 w-1.5 rounded-full bg-white" />EN DIRECT</span></span> },
  { id: "statistiques", kicker: "Statistiques", title: "Le pouls de l’événement, minute par minute.", text: "Arrivées, ventes et participation pendant l’événement.", wide: true,
    visual: <span className="relative block h-[110px] overflow-hidden rounded-[14px] border border-white/[.08]"><svg aria-hidden viewBox="0 0 600 110" preserveAspectRatio="none" className="absolute inset-0 h-full w-full"><path d="M0 95 C80 90 120 66 180 62 S280 28 340 48 S460 12 520 20 S580 30 600 26" fill="none" stroke="#8f9cff" strokeWidth="2" /></svg><span className="q-beam absolute inset-y-0 w-2/5 bg-[linear-gradient(90deg,transparent,rgba(143,156,255,.25),transparent)]" /></span> },
  { id: "site", kicker: "Site de l’événement", title: "À vos couleurs.", text: "Programme, intervenants, partenaires et inscription en ligne.", wide: false,
    visual: <span className="flex gap-2"><span className="h-[90px] flex-1 rounded-xl bg-[linear-gradient(135deg,#6e7ff3,#b9a9ee)]" /><span className="h-[90px] flex-1 rounded-xl bg-[linear-gradient(135deg,#f2b48c,#efa7b5)]" /><span className="h-[90px] flex-1 rounded-xl bg-[linear-gradient(135deg,#8fd3be,#6e7ff3)]" /></span> },
];

export default function FeaturesBento() {
  return (
    <section id="fonctions" className="relative overflow-hidden bg-night px-5 py-[88px] text-[#eceefa] sm:px-6 sm:py-[150px]">
      <div aria-hidden className="absolute left-1/2 top-[-200px] h-[500px] w-[min(1000px,160vw)] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(65,85,201,.45),transparent)] blur-[40px]" />
      <div className="relative mx-auto max-w-[1240px]">
        <h2 className="max-w-[860px] bg-[linear-gradient(180deg,#ffffff,#8a90b8)] bg-clip-text text-[clamp(38px,5.4vw,76px)] font-semibold leading-none tracking-[-0.05em] text-transparent">
          Une plateforme. Tout l’événement.
        </h2>
        <p className="mt-[22px] max-w-[560px] text-lg leading-relaxed text-haze">
          Chaque brique se parle : le billet payé active l’invitation, l’invitation ouvre la porte, chaque entrée remonte au tableau de bord.
        </p>
        <ul className="mt-[60px] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TILES.map((t) => (
            <li key={t.id} className={t.wide ? "lg:col-span-2" : ""}>
              <Link href={`${ROUTES.plateforme}#${t.id}`} className="block h-full text-[#eceefa]">
                <Spotlight className="h-full" innerClassName="flex min-h-[290px] flex-col overflow-hidden p-7">
                  <span className="text-[13px] font-medium text-glow">{t.kicker}</span>
                  <span className="mt-2.5 text-[23px] font-semibold leading-tight tracking-[-0.03em]">{t.title}</span>
                  <span className="mt-2.5 max-w-[420px] text-[15px] leading-relaxed text-haze">{t.text}</span>
                  <span className="mt-auto block pt-6">{t.visual}</span>
                </Spotlight>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
