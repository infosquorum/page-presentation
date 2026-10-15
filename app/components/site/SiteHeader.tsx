// app/components/site/SiteHeader.tsx — en-tête avec méga-menus (ordinateur) et menu plein écran (mobile)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { CONTACT, FORMATS, IMAGES, ROUTES, SERVICES } from "@/lib/site";
import { ArrowIcon, ChevronIcon } from "./Icons";

type Menu = "prestations" | "plateforme" | "liens" | null;

const RESOURCES = [
  { href: ROUTES.apropos, title: "À propos de nous", desc: "Notre mission, nos valeurs, notre histoire" },
  { href: `${ROUTES.apropos}#temoignages`, title: "Témoignages", desc: "Ce que disent nos clients" },
  { href: `${ROUTES.apropos}#carriere`, title: "Carrière", desc: "Rejoindre l’équipe" },
  { href: ROUTES.faq, title: "Questions fréquentes", desc: "Tout savoir avant de vous lancer" },
];

function MenuLink({ href, title, desc, image, onNavigate }: { href: string; title: string; desc: string; image?: string; onNavigate: () => void }) {
  return (
    <Link href={href} onClick={onNavigate} className="flex items-center gap-3.5 rounded-2xl p-2.5 text-ink transition-colors hover:bg-cloud">
      {image && <img src={image} alt="" className="h-14 w-14 shrink-0 rounded-xl object-cover" />}
      <span>
        <span className="block text-[15px] font-semibold">{title}</span>
        <span className="mt-0.5 block text-[13px] leading-snug text-slate">{desc}</span>
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<Menu>(null);
  const [mobile, setMobile] = useState(false);
  const [section, setSection] = useState<Menu>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = () => { setMenu(null); setMobile(false); };

  // Ferme tout au changement de page
  useEffect(() => { close(); }, [pathname]);

  // Échap ferme les menus ; le menu mobile bloque le défilement de la page
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  // Le défilement est bloqué sur <html> (et non <body>) : bloquer <body> le transforme en
  // conteneur de défilement remis à zéro, ce qui renvoyait l'en-tête et le menu en haut de page.
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = mobile ? "hidden" : "";
    return () => { root.style.overflow = ""; };
  }, [mobile]);

  const open = (m: Menu) => { if (closeTimer.current) clearTimeout(closeTimer.current); setMenu(m); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setMenu(null), 120); };
  const toggle = (m: Menu) => setMenu((cur) => (cur === m ? null : m));

  const trigger = (m: Exclude<Menu, null>, label: string) => (
    <button
      type="button"
      onMouseEnter={() => open(m)}
      onClick={() => toggle(m)}
      aria-expanded={menu === m}
      aria-controls={`menu-${m}`}
      className={`inline-flex min-h-10 items-center gap-1.5 rounded-full px-3.5 text-sm text-ink transition-colors ${menu === m ? "bg-[#e6e8f4]" : "hover:bg-cloud"}`}
    >
      {label} <ChevronIcon className={`transition-transform ${menu === m ? "rotate-180" : ""}`} />
    </button>
  );

  const panel = (m: Exclude<Menu, null>, children: ReactNode) =>
    menu === m && (
      <div id={`menu-${m}`} onMouseEnter={() => open(m)} className="q-in absolute inset-x-0 top-full hidden border-b border-ink/5 bg-white/95 shadow-[0_40px_80px_-40px_rgba(14,16,36,.35)] backdrop-blur-xl lg:block">
        <div className="mx-auto flex max-w-[1240px] gap-8 px-6 py-7">{children}</div>
      </div>
    );

  const mobileSection = (m: Exclude<Menu, null>, label: string, children: ReactNode) => (
    <div className="border-b border-ink/10">
      <button type="button" onClick={() => setSection(section === m ? null : m)} aria-expanded={section === m}
        className="flex w-full items-center justify-between py-[18px] text-left text-[22px] font-semibold tracking-tight text-ink">
        {label} <ChevronIcon size={12} className={`transition-transform ${section === m ? "rotate-180" : ""}`} />
      </button>
      {section === m && <div className="q-in pb-3">{children}</div>}
    </div>
  );
  const mLink = (href: string, label: string, strong = false) => (
    <Link key={href + label} href={href} onClick={close} className={`block py-3 text-[17px] ${strong ? "font-semibold text-brand" : "text-ink"}`}>{label}</Link>
  );

  return (
    <header onMouseLeave={scheduleClose} className="sticky top-0 z-[60] border-b border-ink/[.07]">
      {/* Le flou est sur un calque séparé : posé sur <header>, il empêcherait le menu mobile
          (position: fixed) de se caler sur l'écran. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-mist/80 backdrop-blur-xl backdrop-saturate-[1.8]" />
      <nav aria-label="Navigation principale" className="mx-auto flex min-h-[60px] max-w-[1240px] items-center gap-5 px-5 py-2.5 sm:px-6">
        <Link href={ROUTES.home} className="flex min-h-11 items-center gap-2.5 text-base font-semibold tracking-tight text-ink">
          <span aria-hidden className="inline-flex">
            <span className="h-[18px] w-[18px] rounded-full bg-brand-2" />
            <span className="-ml-2 h-[18px] w-[18px] rounded-full bg-lavender mix-blend-multiply" />
          </span>
          Quorum Event
        </Link>

        <div className="hidden flex-1 justify-center gap-1 lg:flex">
          {trigger("prestations", "Nos prestations")}
          {trigger("plateforme", "La plateforme")}
          <Link href={ROUTES.evenements} onMouseEnter={() => setMenu(null)} className="inline-flex min-h-10 items-center rounded-full px-3.5 text-sm text-ink hover:bg-cloud">Événements</Link>
          {trigger("liens", "Liens utiles")}
        </div>

        <Link href={ROUTES.demo} className="q-btn hidden min-h-[42px] items-center rounded-full bg-ink px-[18px] text-sm font-medium text-white lg:inline-flex">
          Demander une démo
        </Link>

        <button type="button" onClick={() => setMobile((v) => !v)} aria-expanded={mobile} aria-controls="menu-mobile"
          aria-label={mobile ? "Fermer le menu" : "Ouvrir le menu"}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 bg-white text-ink lg:hidden">
          {mobile ? (
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M6 6l12 12M18 6L6 18" /></svg>
          ) : (
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          )}
        </button>
      </nav>

      {panel("prestations", <>
        <Link href={ROUTES.ag} onClick={close} className="q-zoom relative flex min-h-[250px] flex-1 flex-col justify-end overflow-hidden rounded-[20px] p-[22px] text-white">
          <img src={IMAGES.sgci} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute inset-0 bg-[linear-gradient(transparent_20%,rgba(7,8,26,.88))]" />
          <span className="relative text-xs opacity-85">Notre expertise historique</span>
          <span className="relative mt-1 text-[21px] font-semibold tracking-tight">Assemblées générales</span>
          <span className="relative mt-1.5 text-[13px] leading-snug opacity-85">Émargement, quorum et votes des résolutions en temps réel.</span>
          <span className="relative mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold">Découvrir <ArrowIcon /></span>
        </Link>
        <div className="flex-[2]">
          <div className="px-2.5 pb-2.5 text-xs text-slate">Événements d’entreprise et grand public</div>
          <div className="grid grid-cols-2 gap-1.5">
            {FORMATS.map((f) => <MenuLink key={f.id} href={`${ROUTES.prestations}#${f.id}`} title={f.title} desc={f.desc} image={f.image} onNavigate={close} />)}
          </div>
        </div>
      </>)}

      {panel("plateforme", <>
        <div className="grid flex-[2] grid-cols-2 gap-1.5">
          {SERVICES.map((s) => <MenuLink key={s.id} href={`${ROUTES.plateforme}#${s.id}`} title={s.title} desc={s.desc} onNavigate={close} />)}
        </div>
        <Link href={ROUTES.plateforme} onClick={close} className="flex min-h-[200px] flex-1 flex-col justify-between rounded-[20px] bg-night p-[22px] text-[#eceefa]">
          <span className="text-xs text-glow">Vue d’ensemble</span>
          <span className="text-[19px] font-semibold leading-tight tracking-tight">Six briques qui se parlent, de l’inscription au bilan.</span>
          <span className="inline-flex items-center gap-1.5 text-[13px] text-[#aab5ff]">Découvrir la plateforme <ArrowIcon /></span>
        </Link>
      </>)}

      {panel("liens", <>
        <div className="grid flex-[2] grid-cols-2 gap-1.5">
          {RESOURCES.map((r) => <MenuLink key={r.href} {...r} onNavigate={close} />)}
        </div>
        <div className="flex flex-1 flex-col gap-2.5 rounded-[20px] bg-cloud p-[22px] text-sm text-[#3a3f5c]">
          <span className="text-xs text-slate">Nous contacter</span>
          <a href={CONTACT.phoneHref} className="text-[19px] font-semibold text-ink">{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} className="text-brand">{CONTACT.email}</a>
          <span>{CONTACT.address.join(", ")}</span>
        </div>
      </>)}

      {mobile && (
        <div id="menu-mobile" className="q-in fixed inset-x-0 bottom-0 top-[61px] flex flex-col overflow-y-auto overscroll-contain bg-mist px-5 pb-8 pt-2 lg:hidden">
          {mobileSection("prestations", "Nos prestations", <>
            {mLink(ROUTES.ag, "Assemblées générales", true)}
            {FORMATS.map((f) => mLink(`${ROUTES.prestations}#${f.id}`, f.title))}
          </>)}
          {mobileSection("plateforme", "La plateforme", <>
            {SERVICES.map((s) => mLink(`${ROUTES.plateforme}#${s.id}`, s.title))}
          </>)}
          <Link href={ROUTES.evenements} onClick={close} className="border-b border-ink/10 py-[18px] text-[22px] font-semibold tracking-tight text-ink">Événements</Link>
          {mobileSection("liens", "Liens utiles", <>{RESOURCES.map((r) => mLink(r.href, r.title))}</>)}
          <Link href={ROUTES.demo} onClick={close} className="mt-7 flex min-h-[54px] items-center justify-center rounded-full bg-brand font-semibold text-white">Demander une démo</Link>
          <a href={CONTACT.phoneHref} className="mt-2.5 flex min-h-[54px] items-center justify-center rounded-full border border-ink/10 bg-white font-semibold text-ink">{CONTACT.phone}</a>
        </div>
      )}
    </header>
  );
}
