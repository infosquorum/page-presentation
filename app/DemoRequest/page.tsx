// app/DemoRequest/page.tsx
import type { Metadata } from "next";
import { CONTACT, IMAGES } from "@/lib/site";
import DemoForm from "./components/DemoForm";

export const metadata: Metadata = { title: "Demander une démo", description: "Une démonstration adaptée à votre format, à votre public et à votre calendrier." };

const NEXT_STEPS = [
  ["Vous nous décrivez votre projet", "Deux minutes suffisent."],
  ["Nous vous rappelons", "Pour préciser vos besoins."],
  ["Vous voyez la plateforme en action", "Sur un scénario proche du vôtre."],
];

export default function DemoRequestPage() {
  return (
    <main className="px-5 pb-[100px] pt-10 sm:px-6 sm:pt-14">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 lg:flex-row lg:items-stretch">
        <section className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[32px] bg-night p-7 text-[#eceefa] sm:p-12 lg:w-[45%]">
          <img src={IMAGES.stage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,26,.4),#07081a_75%)]" />
          <div className="relative">
            <h1 className="text-[clamp(40px,5vw,72px)] font-semibold leading-[.95] tracking-[-0.055em]">Parlons de votre événement.</h1>
            <p className="mt-[18px] max-w-[420px] text-[17px] leading-relaxed text-[#b9bedc]">Une démonstration adaptée à votre format, à votre public et à votre calendrier.</p>
          </div>
          <ol className="relative mt-auto flex flex-col gap-[18px] pt-10">
            {NEXT_STEPS.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/30 text-sm">{i + 1}</span>
                <span><b className="font-semibold">{t}</b><br /><span className="text-[15px] text-haze">{d}</span></span>
              </li>
            ))}
          </ol>
          <div className="relative mt-8 text-sm text-haze">Ou appelez-nous : <a href={CONTACT.phoneHref} className="font-semibold text-white">{CONTACT.phone}</a></div>
        </section>
        <section aria-label="Formulaire de demande de démo" className="lg:w-[55%]">
          <DemoForm />
        </section>
      </div>
    </main>
  );
}
