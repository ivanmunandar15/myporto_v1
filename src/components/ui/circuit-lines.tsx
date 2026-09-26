import { cn } from "@/lib/utils";

/**
 * Purely decorative circuit-trace motif: a few right-angled schematic lines
 * with small "node" terminals, drawn with the existing primary color only.
 * Gives the hero a literal electrical-engineering reference beyond the grid,
 * without competing with the text. aria-hidden, no semantic content.
 */
export function CircuitLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      fill="none"
      className={cn("text-primary", className)}
    >
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35">
        <path d="M0 60 H120 V140 H240" />
        <path d="M400 40 H300 V110 H180 V180" />
        <path d="M40 400 V300 H160 V260" />
        <path d="M400 260 H320 V340 H220" />
      </g>
      <g fill="currentColor" opacity="0.5">
        <circle cx="120" cy="60" r="3.5" />
        <circle cx="240" cy="140" r="3.5" />
        <circle cx="180" cy="110" r="3.5" />
        <circle cx="180" cy="180" r="3.5" />
        <circle cx="160" cy="300" r="3.5" />
        <circle cx="160" cy="260" r="3.5" />
        <circle cx="320" cy="260" r="3.5" />
        <circle cx="220" cy="340" r="3.5" />
      </g>
    </svg>
  );
}
