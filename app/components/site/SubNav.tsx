// app/components/site/SubNav.tsx — barre de sections collante avec suivi du défilement
"use client";

import { useEffect, useState } from "react";

export default function SubNav({ items, label }: { items: { id: string; label: string }[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <div className="sticky top-[60px] z-40 border-b border-ink/5 bg-mist/85 backdrop-blur-xl">
      <nav aria-label={label} className="mx-auto flex max-w-[1240px] gap-1.5 overflow-x-auto px-5 py-2.5 [scrollbar-width:none] sm:px-6">
        {items.map((i) => {
          const on = i.id === active;
          return (
            <a
              key={i.id}
              href={`#${i.id}`}
              aria-current={on ? "location" : undefined}
              className={`inline-flex min-h-10 shrink-0 items-center rounded-full px-4 text-sm font-medium transition-colors ${on ? "bg-ink text-white" : "text-[#3a3f5c] hover:bg-cloud"}`}
            >
              {i.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
