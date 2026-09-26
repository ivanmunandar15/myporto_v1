import { iconMap } from "@/components/ui/icon-map";
import type { ExpertiseItem } from "@/data/expertise";

export function ExpertiseCard({ icon, title, description }: ExpertiseItem) {
  const Icon = iconMap[icon];

  return (
    <div className="group flex flex-col gap-4 rounded-card border border-border bg-surface p-6 transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
      <span className="flex h-11 w-11 items-center justify-center rounded-input bg-gradient-primary text-white transition-transform duration-300 ease-editorial group-hover:scale-105">
        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-base font-semibold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-secondary">{description}</p>
      </div>
    </div>
  );
}
