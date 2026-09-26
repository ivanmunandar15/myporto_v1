import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { aboutSummary, storySteps } from "@/data/about";

export function About() {
  return (
    <section id="about" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <Reveal>
          <SectionHeading
            label="About"
            title="Professional overview"
            description={aboutSummary}
            align="split"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-stretch md:gap-3">
            {storySteps.map((step, index) => (
              <li
                key={step.label}
                className="flex flex-1 items-start gap-3 rounded-card border border-border bg-surface p-4 transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated md:min-w-[180px] md:flex-col md:gap-4"
              >
                <div className="flex flex-1 flex-col gap-1">
                  <span className="font-heading text-sm font-semibold text-ink">
                    {step.label}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-secondary">
                    {step.description}
                  </span>
                </div>
                {index < storySteps.length - 1 ? (
                  <ArrowRight
                    size={16}
                    strokeWidth={1.75}
                    className="mt-1 shrink-0 text-ink-muted md:hidden"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
