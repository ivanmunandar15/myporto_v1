import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SectionBackdrop } from "@/components/ui/section-backdrop";
import { ExpertiseCard } from "@/components/cards/expertise-card";
import { expertiseItems } from "@/data/expertise";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-accent/30 px-6 py-16 md:px-12 md:py-24"
    >
      <SectionBackdrop />
      <div className="relative mx-auto flex max-w-content flex-col gap-10">
        <Reveal>
          <SectionHeading
            label="Core expertise"
            title="Where engineering meets software"
            description="Six disciplines that consistently show up together in the systems I build."
            align="split"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseItems.map((item) => (
              <ExpertiseCard key={item.title} {...item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
