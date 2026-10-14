// app/components/home/RolesSection.tsx
"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const ROLES = {
  Participant: {
    title: "Tout dans la poche.",
    text: "Une inscription claire, un paiement avec son mobile, un badge qui s'affiche sans impression.",
    points: ["Inscription en quelques champs", "Paiement Orange Money, MTN, Moov ou Wave", "Badge à présenter à l'entrée"],
    screen: ["Mon inscription", "Inscription confirmée", "Mon badge"],
  },
  Organisateur: {
    title: "Votre événement, en direct.",
    text: "Les inscriptions, les encaissements et les présences se mettent à jour pendant que l'événement se déroule.",
    points: ["Suivi des inscriptions et des paiements", "Votes et résolutions en séance", "Bilan exportable à la clôture"],
    screen: ["Tableau de bord", "412 accueillis sur 500", "Résolution 3 adoptée"],
  },
  Accueil: {
    title: "Un scan, et c'est validé.",
    text: "L'équipe d'accueil scanne le badge et voit immédiatement si le participant est attendu et à jour.",
    points: ["Scan du badge depuis un téléphone", "Statut de paiement visible", "Plusieurs entrées en parallèle"],
    screen: ["Contrôle d'accès", "Badge valide", "Entrée A · 09:42"],
  },
} as const;

type Role = keyof typeof ROLES;

export default function RolesSection() {
  const [role, setRole] = useState<Role>("Participant");
  const r = ROLES[role];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h2 className="qe-title text-4xl sm:text-5xl">Voir de plus près.</h2>
          <p className="mt-3 text-[var(--qe-muted)]">Choisissez un rôle et découvrez ce qu&apos;il voit.</p>
          <div role="tablist" aria-label="Rôle" className="mt-6 inline-flex rounded-full border border-[var(--qe-line)] bg-[var(--qe-surface)] p-1">
            {(Object.keys(ROLES) as Role[]).map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={role === k}
                onClick={() => setRole(k)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  role === k ? "bg-[var(--qe-primary)] text-[var(--qe-on-primary)]" : "text-[var(--qe-muted)]"
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <div role="tabpanel" className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="qe-title text-3xl">{r.title}</h3>
            <p className="mt-3 max-w-md text-[var(--qe-muted)]">{r.text}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {r.points.map((p) => (
                <li key={p} className="flex items-center gap-3"><Check size={16} className="text-[var(--qe-primary)]" aria-hidden />{p}</li>
              ))}
            </ul>
          </div>
          <div className="grid place-items-center rounded-[28px] border border-[var(--qe-line)] bg-[var(--qe-soft)] py-10">
            <div className="w-56 rounded-[28px] border-[6px] border-[var(--qe-ink)] bg-[var(--qe-surface)] p-4">
              <p className="text-[11px] text-[var(--qe-muted)]">{r.screen[0]}</p>
              <p className="qe-title mt-2 text-lg">Assemblée Générale Ordinaire</p>
              <div className="mt-3 flex items-center gap-2 rounded-xl bg-[var(--qe-soft)] p-3 text-xs font-medium">
                <span className="grid h-6 w-6 place-items-center rounded-full text-[var(--qe-on-pastel)]" style={{ background: "var(--qe-mint)" }}><Check size={12} aria-hidden /></span>
                {r.screen[1]}
              </div>
              <div className="mt-3 h-24 rounded-xl bg-[var(--qe-soft)] p-3 text-[11px] text-[var(--qe-muted)]">{r.screen[2]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
