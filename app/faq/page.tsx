// app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, ROUTES } from "@/lib/site";
import { ArrowIcon } from "../components/site/Icons";
import FaqList from "./FaqList";

export const metadata: Metadata = { title: "Questions fréquentes" };

const FAQ = [
  { q: "Qu’est-ce que Quorum Event ?", a: "Une plateforme de gestion d’événements qui réunit inscriptions, billetterie, accueil, interactions en direct et bilan, accompagnée d’une équipe présente le jour J." },
  { q: "Quels types d’événements puis-je organiser ?", a: "Conférences, cérémonies et remises de prix, séminaires, forums et salons, conventions, soirées d’entreprise, sur place, en ligne ou hybrides, sans oublier les assemblées générales, notre expertise historique." },
  { q: "Comment fonctionne la billetterie ?", a: "Vous créez vos types de billets, leurs prix et leurs quantités. Vos invités paient avec Orange Money, MTN, Moov ou Wave et reçoivent leur billet aussitôt." },
  { q: "Comment se passe l’accueil le jour J ?", a: "Chaque invité présente son badge ou son billet sur son téléphone. Votre équipe le scanne, et sa présence remonte au tableau de bord." },
  { q: "Puis-je personnaliser l’apparence de mon événement ?", a: "Oui : couleurs, logo, programme, intervenants, partenaires et formulaire d’inscription sont adaptés à votre identité." },
  { q: "Proposez-vous des statistiques ?", a: "Oui. Inscriptions, ventes, arrivées et participation se suivent en temps réel, et un bilan est disponible à la clôture." },
  { q: "La plateforme est-elle facile à utiliser ?", a: "Aucune compétence technique n’est nécessaire. Notre équipe vous accompagne pour la prise en main." },
  { q: "Comment vous contacter ?", a: `Par téléphone au ${CONTACT.phone}, par e-mail à ${CONTACT.email}, ou via le formulaire de demande de démo.` },
];

export default function FaqPage() {
  return (
    <main className="px-5 pb-[88px] pt-12 sm:px-6 sm:pb-[140px] sm:pt-[72px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-[100px] lg:w-[36%]">
          <h1 className="text-[clamp(44px,6vw,84px)] font-semibold leading-[.95] tracking-[-0.06em]">Questions fréquentes.</h1>
          <p className="mt-5 max-w-[380px] text-[17px] leading-relaxed text-slate">Vous ne trouvez pas votre réponse ? Notre équipe vous répond rapidement.</p>
          <div className="mt-7 rounded-[22px] bg-night p-6 text-[#eceefa]">
            <div className="text-[13px] text-glow">Nous contacter</div>
            <a href={CONTACT.phoneHref} className="mt-2 block text-[22px] font-semibold text-white">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="mt-1 block text-[#aab5ff]">{CONTACT.email}</a>
            <Link href={ROUTES.demo} className="q-btn mt-[18px] inline-flex min-h-[46px] items-center gap-2 rounded-full bg-white px-[18px] text-sm font-semibold text-night">Demander une démo <ArrowIcon /></Link>
          </div>
        </div>
        <div className="lg:w-[64%]"><FaqList items={FAQ} /></div>
      </div>
    </main>
  );
}
