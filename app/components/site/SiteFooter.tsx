// app/components/site/SiteFooter.tsx — bandeau final + pied de page (zones Lottie)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT, FORMATS, IMAGES, LOTTIE, ROUTES } from "@/lib/site";
import { ArrowIcon } from "./Icons";
import { MagneticLink } from "./Interactive";
import LottieSlot from "./LottieSlot";
import NewsletterForm from "./NewsletterForm";
import QrGrid from "./QrGrid";
import Wordmark from "./Wordmark";

const PALETTE = ["#6e7ff3", "#b9a9ee", "#efa7b5", "#f2b48c", "#8fd3be"];
const CONFETTI = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 41) % 100}%`, width: 6 + (i % 3) * 3, color: PALETTE[i % 5],
  delay: `${(-(i * 0.6) % 5).toFixed(1)}s`, duration: `${(4.5 + (i % 4) * 0.9).toFixed(1)}s`,
}));

const CssConfetti = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0">
    {CONFETTI.map((c, i) => (
      <span key={i} className="q-conf absolute top-0 h-3.5 rounded-[3px]"
        style={{ left: c.left, width: c.width, background: c.color, animationDelay: c.delay, animationDuration: c.duration }} />
    ))}
  </div>
);

const CssBadge = () => (
  <div aria-hidden className="q-float relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#6e7ff3,#b9a9ee)]">
    <QrGrid size={5} on="#ffffff" off="rgba(255,255,255,.2)" beam="#ffffff" gap={3} className="w-[42px]" />
  </div>
);

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="min-w-[150px] flex-1">
      <div className="text-[13px] font-semibold">{title}</div>
      <ul className="mt-4 flex flex-col gap-3 text-sm">
        {links.map((l) => <li key={l.href}><Link href={l.href} className="q-link text-haze">{l.label}</Link></li>)}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  const pathname = usePathname();
  const showCta = !pathname?.toLowerCase().startsWith(ROUTES.demo.toLowerCase());

  return (
    <footer className="relative overflow-hidden bg-night text-[#eceefa]">
      {showCta && (
        <div className="relative h-[460px] overflow-hidden sm:h-[720px]">
          <img src={IMAGES.stage} alt="" className="sd-par absolute inset-0 h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(7,8,26,.2),rgba(7,8,26,.95)_75%),linear-gradient(180deg,transparent_60%,#07081a)]" />
          <LottieSlot src={LOTTIE.confetti} fallback={<CssConfetti />} className="pointer-events-none absolute inset-0" />
          <div className="relative grid h-full place-items-center px-5 text-center sm:px-6">
            <div>
              <h2 className="mx-auto max-w-[900px] text-[clamp(42px,7vw,108px)] font-semibold leading-[.92] tracking-[-0.06em]">Parlons de votre prochain événement.</h2>
              <p className="mx-auto mt-6 max-w-[480px] text-[19px] leading-normal text-[#b9bedc]">Dites-nous ce que vous organisez, nous revenons avec une démonstration adaptée.</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <MagneticLink href={ROUTES.demo} className="inline-flex min-h-[58px] items-center justify-center gap-2.5 rounded-full bg-white px-[30px] font-semibold text-night">
                  Demander une démo <ArrowIcon />
                </MagneticLink>
                <a href={CONTACT.phoneHref} className="q-btn inline-flex min-h-[58px] items-center justify-center rounded-full border border-white/25 bg-white/[.08] px-[26px] font-medium text-white">{CONTACT.phone}</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`relative mx-auto flex max-w-[1240px] flex-wrap gap-10 px-5 sm:px-6 ${showCta ? "pt-10" : "pt-20"}`}>
        <div className="min-w-[280px] flex-[2]">
          <div className="flex items-center gap-[18px]">
            <LottieSlot src={LOTTIE.badge} fallback={<CssBadge />} className="h-20 w-20 shrink-0" />
            <div>
              <div className="text-[21px] font-semibold tracking-tight">On se voit au prochain ?</div>
              <div className="mt-1.5 text-[15px] text-haze">Recevez nos prochains événements, rien d’autre.</div>
            </div>
          </div>
          <NewsletterForm />
        </div>
        <Column title="Prestations" links={[{ label: "Assemblées générales", href: ROUTES.ag }, ...FORMATS.slice(0, 4).map((f) => ({ label: f.title, href: `${ROUTES.prestations}#${f.id}` }))]} />
        <Column title="Liens utiles" links={[
          { label: "À propos de nous", href: ROUTES.apropos }, { label: "Témoignages", href: `${ROUTES.apropos}#temoignages` },
          { label: "Carrière", href: `${ROUTES.apropos}#carriere` }, { label: "FAQ", href: ROUTES.faq }]} />
        <div className="min-w-[200px] flex-1">
          <div className="text-[13px] font-semibold">Contact</div>
          <div className="mt-4 flex flex-col gap-3 text-sm leading-normal text-haze">
            <span>{CONTACT.address[0]}<br />{CONTACT.address[1]}</span>
            <a href={CONTACT.phoneHref} className="q-link self-start">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="q-link self-start">{CONTACT.email}</a>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-12 flex max-w-[1240px] flex-wrap justify-between gap-3 border-t border-white/[.08] px-5 pt-5 text-xs text-[#6f7598] sm:px-6">
        <span>© {new Date().getFullYear()} Quorum Event</span><span>Propulsé par FX_LABS SARL</span>
      </div>
      <Wordmark />
    </footer>
  );
}
