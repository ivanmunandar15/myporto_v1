import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { iconMap } from "@/components/ui/icon-map";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <Reveal>
          <SectionHeading label="Technical skills" title="Tools and technical areas" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = iconMap[group.icon];
              return (
                <div
                  key={group.category}
                  className="rounded-card border border-border bg-surface p-6 transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-input bg-gradient-primary text-white">
                      <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-sm font-semibold text-ink">
                      {group.category}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-chip border border-primary/15 bg-background px-3 py-1 font-mono text-xs font-medium text-ink-secondary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
