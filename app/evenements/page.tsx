// app/evenements/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/site";
import { ArrowIcon } from "../components/site/Icons";
import EventsExplorer from "./EventsExplorer";

export const metadata: Metadata = { title: "Événements", description: "Les événements à venir et passés organisés avec Quorum Event." };

export default function EvenementsPage() {
  return (
    <main>
      <EventsExplorer />
      <section className="px-5 pb-[140px] sm:px-6">
        <Link href={ROUTES.ag} className="mx-auto flex max-w-[1240px] flex-col gap-6 rounded-3xl bg-night px-8 py-7 text-[#eceefa] md:flex-row md:items-center">
          <span className="flex-1">
            <span className="block text-[13px] text-glow">Assemblées générales</span>
            <span className="mt-1.5 block text-[clamp(20px,2.4vw,28px)] font-semibold tracking-[-0.03em]">Société Générale CI, Orange CI, SAPH, Sucrivoire, Nestlé…</span>
          </span>
          <span className="inline-flex min-h-12 items-center gap-2.5 self-start rounded-full bg-white px-[22px] font-semibold text-night md:self-auto">Voir nos assemblées générales <ArrowIcon /></span>
        </Link>
      </section>
    </main>
  );
}
