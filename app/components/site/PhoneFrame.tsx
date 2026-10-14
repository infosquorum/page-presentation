// app/components/site/PhoneFrame.tsx
import type { ReactNode } from "react";

export default function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative h-[600px] w-[290px] rounded-[52px] bg-[linear-gradient(160deg,#3a3f66,#12142c_40%,#2b2f55)] p-[11px] shadow-[0_60px_120px_-40px_rgba(0,0,0,.85),inset_0_1px_0_rgba(255,255,255,.2)] ${className}`}>
      <div className="relative flex h-full flex-col gap-3.5 overflow-hidden rounded-[42px] bg-white px-5 pb-5 pt-12 text-ink">
        <div aria-hidden className="absolute left-1/2 top-3 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-ink" />
        {children}
      </div>
    </div>
  );
}
