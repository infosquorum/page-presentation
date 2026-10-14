// app/components/site/LottieSlot.tsx
// Affiche une animation Lottie si un fichier est configuré (lib/site.ts → LOTTIE),
// sinon l'animation CSS fournie en `fallback`.
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false }
);

type Props = { src: string; fallback: ReactNode; className?: string };

export default function LottieSlot({ src, fallback, className }: Props) {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (!src) return <>{fallback}</>;
  return (
    <div aria-hidden className={className}>
      <DotLottieReact src={src} loop autoplay={!reduce} />
    </div>
  );
}
