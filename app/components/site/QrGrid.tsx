// app/components/site/QrGrid.tsx — QR code décoratif avec faisceau de scan
const PATTERN_7 = "1100111101101110111011001001100000111011011101101";
const PATTERN_5 = "1101101011111010101111011";

type Props = { size?: 5 | 7; on?: string; off?: string; beam?: string; gap?: number; className?: string };

export default function QrGrid({ size = 7, on = "#0e1024", off = "#eceef7", beam = "#4155c9", gap = 4, className = "" }: Props) {
  const bits = (size === 7 ? PATTERN_7 : PATTERN_5).split("");
  return (
    <div aria-hidden className={`relative grid ${className}`} style={{ gap, gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}>
      {bits.map((b, i) => (
        <span key={i} className="aspect-square rounded-[3px]" style={{ background: b === "1" ? on : off }} />
      ))}
      <span className="q-scan absolute -inset-x-2.5 h-[3px] rounded" style={{ background: beam, boxShadow: `0 0 18px 4px ${beam}99` }} />
    </div>
  );
}
