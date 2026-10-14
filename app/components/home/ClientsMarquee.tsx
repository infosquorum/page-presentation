// app/components/home/ClientsMarquee.tsx
import { CLIENTS } from "@/lib/site";

export default function ClientsMarquee() {
  return (
    <section aria-labelledby="clients-title" className="pb-[110px]">
      <h2 id="clients-title" className="mb-7 text-center text-sm font-normal text-slate">Ils nous font confiance</h2>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="q-marquee flex w-max items-center gap-[72px]">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <li key={i} aria-hidden={i >= CLIENTS.length || undefined} className="whitespace-nowrap text-[26px] font-semibold tracking-[-0.03em] text-[#9a9fbd]">{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
