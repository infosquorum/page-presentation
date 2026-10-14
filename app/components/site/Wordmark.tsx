// app/components/site/Wordmark.tsx — logotype animé, proportionnel à la largeur
const COLORS = ["#6e7ff3", "#6e7ff3", "#b9a9ee", "#b9a9ee", "#efa7b5", "#efa7b5", "#efa7b5", "#f2b48c", "#f2b48c", "#8fd3be", "#8fd3be", "#6e7ff3"];

export default function Wordmark() {
  return (
    <div aria-hidden className="q-wordmark relative w-full overflow-hidden pt-7">
      <div className="q-wordmark-in mb-[-0.16em] whitespace-nowrap text-center font-display font-black leading-none tracking-[-0.045em]">
        {"Quorum Event".split("").map((ch, i) => (
          <span key={i} className="q-letter" style={{ color: COLORS[i], animationDelay: `${(i * 0.12).toFixed(2)}s` }}>
            {ch === " " ? "\u00a0" : ch}
          </span>
        ))}
      </div>
    </div>
  );
}
