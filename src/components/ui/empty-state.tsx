import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Shown in place of a section's content grid when no confirmed data exists
 * yet (e.g. experience or certifications not yet provided). Deliberately
 * designed rather than left as a grid of "[PLACEHOLDER]" cards — an honest,
 * calm empty state reads as intentional; a grid of bracketed fake entries
 * reads as unfinished.
 */
export function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-card border border-dashed border-primary/25 bg-surface/60 px-6 py-14 text-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-input bg-primary-light text-primary-dark">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <p className="font-heading text-sm font-semibold text-ink">{title}</p>
      <p className="max-w-sm text-sm leading-relaxed text-ink-secondary">{description}</p>
    </div>
  );
}
