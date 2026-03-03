"use client";

export function ConduitLogo({ className = "", mono = false }: { className?: string; mono?: boolean }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="c-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={mono ? "currentColor" : "#7c3aed"} />
          <stop offset="100%" stopColor={mono ? "currentColor" : "#6366f1"} />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="34" height="34" rx="9" fill="url(#c-grad)" />
      <path d="M9 13h5c2.2 0 4 1.8 4 4v2c0 2.2 1.8 4 4 4h5" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M9 18h18" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M9 23h5c2.2 0 4-1.8 4-4v-2c0-2.2 1.8-4 4-4h5" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
