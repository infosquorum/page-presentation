// app/components/home/CtaFinal.tsx
import Link from "next/link";

const PHONE = "+225 01 41 95 03 52";

export default function CtaFinal() {
  return (
    <section className="px-5 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-[var(--qe-line)] bg-[var(--qe-soft)] px-6 py-20 text-center">
        <div aria-hidden className="absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-50 blur-3xl" style={{ background: "var(--qe-blue)" }} />
        <div aria-hidden className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full opacity-40 blur-3xl" style={{ background: "var(--qe-peach)" }} />
        <div className="relative">
          <h2 className="qe-display mx-auto max-w-3xl text-[clamp(2.25rem,6vw,4rem)]">Parlons de votre prochain événement.</h2>
          <p className="mx-auto mt-5 max-w-md text-[var(--qe-muted)]">Dites-nous ce que vous organisez, nous revenons avec une démonstration adaptée.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/DemoRequest" className="rounded-full bg-[var(--qe-primary)] px-6 py-3 text-sm font-semibold text-[var(--qe-on-primary)]">Demander une démo</Link>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="rounded-full bg-[var(--qe-surface)] px-6 py-3 text-sm font-semibold">{PHONE}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
