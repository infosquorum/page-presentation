// app/components/site/Icons.tsx
type P = { size?: number; className?: string };

export const ArrowIcon = ({ size = 13, className }: P) => (
  <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const CheckIcon = ({ size = 16, className }: P) => (
  <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} className={className}>
    <path d="M5 12l5 5 9-10" />
  </svg>
);
export const ChevronIcon = ({ size = 10, className }: P) => (
  <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className={className}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
export const PlayIcon = ({ size = 14, className }: P) => (
  <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 4v16l13-8z" />
  </svg>
);
export const ScanIcon = ({ size = 18, className }: P) => (
  <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M4 12h16" />
  </svg>
);
