// app/components/site/Interactive.tsx
// Micro-interactions pilotées par variables CSS : aucun re-rendu React au mouvement de la souris.
"use client";

import Link from "next/link";
import { useRef, type ComponentProps, type PointerEvent, type ReactNode } from "react";

const reduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function relative(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  return { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
}

/** Carte qui bascule en 3D sous le curseur (classes .q-tilt, .q-tilt-img, .q-tilt-light). */
export function TiltCard({ className = "", children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || reduced() || !ref.current) return;
    const { x, y } = relative(e);
    const s = ref.current.style;
    s.setProperty("--rx", `${((0.5 - y) * 10).toFixed(2)}deg`);
    s.setProperty("--ry", `${((x - 0.5) * 12).toFixed(2)}deg`);
    s.setProperty("--px", `${((0.5 - x) * 16).toFixed(1)}px`);
    s.setProperty("--py", `${((0.5 - y) * 16).toFixed(1)}px`);
    s.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
    s.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
  };
  const leave = () => {
    const s = ref.current?.style;
    ["--rx", "--ry", "--px", "--py", "--gx", "--gy"].forEach((p) => s?.removeProperty(p));
  };
  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={leave} className={`q-tilt ${className}`}>
      {children}
    </div>
  );
}

/** Tuile dont la bordure et le fond suivent le curseur (classes .q-spot / .q-spot-in). */
export function Spotlight({ className = "", innerClassName = "", children }: { className?: string; innerClassName?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { x, y } = relative(e);
    ref.current.style.setProperty("--x", `${(x * 100).toFixed(1)}%`);
    ref.current.style.setProperty("--y", `${(y * 100).toFixed(1)}%`);
  };
  return (
    <div ref={ref} onPointerMove={move} className={`q-spot rounded-3xl p-px ${className}`}>
      <div className={`q-spot-in h-full rounded-[23px] ${innerClassName}`}>{children}</div>
    </div>
  );
}

/** Lien « magnétique » qui suit légèrement le curseur. */
export function MagneticLink({ className = "", ...props }: ComponentProps<typeof Link>) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== "mouse" || reduced() || !ref.current) return;
    const { x, y } = relative(e);
    ref.current.style.transform = `translate(${((x - 0.5) * 18).toFixed(1)}px, ${((y - 0.5) * 14).toFixed(1)}px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  return <Link ref={ref} onPointerMove={move} onPointerLeave={leave} className={`q-btn ${className}`} {...props} />;
}
