// app/components/home/JourJ.tsx — photo immersive révélée au défilement
import { IMAGES } from "@/lib/site";
import { PlayIcon } from "../site/Icons";

const STRIP = [
  { src: IMAGES.conference, alt: "Une intervenante devant un amphithéâtre" },
  { src: IMAGES.phones, alt: "Le public lève ses téléphones pendant un concert" },
  { src: IMAGES.seminaire, alt: "Échange en petit groupe lors d’un séminaire" },
];

export default function JourJ() {
  return (
    <section id="jourj" className="py-[88px] sm:pb-[140px] sm:pt-[150px]">
      <div className="mx-auto max-w-[1240px] px-5 text-center sm:px-6">
        <h2 className="sd-scale text-[clamp(60px,11vw,176px)] font-semibold leading-[.88] tracking-[-0.065em]">Le jour J.</h2>
        <p className="mx-auto mt-6 max-w-[560px] text-[clamp(17px,2vw,21px)] leading-normal text-slate">
          Des salles pleines, des files qui avancent, des votes qui tombent en direct. Voici à quoi ça ressemble.
        </p>
      </div>
      <div className="sd-reveal relative mt-[72px] h-[460px] overflow-hidden sm:h-[760px]">
        <img src={IMAGES.gala} alt="Salle de gala dressée avant une cérémonie" className="sd-par absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,26,0)_40%,rgba(7,8,26,.82))]" />
        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-10 text-white sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div>
            {/* TODO : remplacer par l'événement réel de la vidéo */}
            <div className="text-sm opacity-80">[Nom de l’événement] · [date]</div>
            <div className="mt-2.5 text-[clamp(30px,4vw,52px)] font-semibold tracking-[-0.04em]">Revivez l’ambiance.</div>
          </div>
          {/* TODO : ouvrir la vidéo (fichier ou YouTube) dans une fenêtre */}
          <button type="button" aria-label="Lire la vidéo" className="q-btn grid h-[88px] w-[88px] shrink-0 place-items-center rounded-full border border-white/35 bg-white/[.14] text-white backdrop-blur-xl">
            <PlayIcon size={26} />
          </button>
        </div>
      </div>
      <div className="mx-auto mt-[18px] grid max-w-[1240px] gap-[18px] px-5 sm:grid-cols-3 sm:px-6">
        {STRIP.map((p) => (
          <div key={p.src} className="q-zoom sd-up aspect-[4/3] overflow-hidden rounded-[22px]">
            <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
