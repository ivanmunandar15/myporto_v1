import { cn } from "@/lib/utils";

interface SectionBackdropProps {
  variant?: "mesh" | "radial";
  className?: string;
}

/**
 * Absolute-positioned decorative layer: a faint engineering grid plus a soft
 * gradient glow, built entirely from the existing primary color tokens.
 * Purely visual — aria-hidden, no content. Place inside a `relative
 * overflow-hidden` wrapper as the first child.
 */
export function SectionBackdrop({ variant = "radial", className }: SectionBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade" />
      <div
        className={cn(
          "absolute inset-0",
          variant === "mesh" ? "bg-gradient-mesh" : "bg-gradient-radial-soft"
        )}
      />
    </div>
  );
}
