import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "split";
  className?: string;
}

/**
 * Shared heading treatment for main content sections: a short label,
 * a heading, and an optional supporting line. `align="split"` places the
 * description alongside the heading on wide screens (used sparingly, only
 * where the extra context earns the space).
 */
export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "split"
          ? "flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          : "flex flex-col gap-3",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <span className="inline-flex items-center gap-2">
          <span className="h-px w-6 bg-gradient-to-r from-primary to-transparent" aria-hidden="true" />
          <span className="font-mono text-sm tracking-wide text-primary">{label}</span>
        </span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-md text-base leading-relaxed text-ink-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}
