// app/faq/FaqList.tsx — questions dépliables
"use client";

import { useId, useState } from "react";

export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <ul className="border-t border-ink/10">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q} className="border-b border-ink/10">
            <h2>
              <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`${base}-${i}`}
                className="flex w-full items-center justify-between gap-5 py-[26px] text-left text-[clamp(18px,2vw,22px)] font-semibold tracking-[-0.02em] text-ink">
                {f.q}
                <span aria-hidden className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? "rotate-45 bg-ink text-white" : "bg-cloud text-ink"}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6}><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </button>
            </h2>
            <div id={`${base}-${i}`} hidden={!isOpen}>
              <p className="q-in pb-[26px] pr-14 text-[17px] leading-relaxed text-slate">{f.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
