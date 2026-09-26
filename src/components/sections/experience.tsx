import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SectionBackdrop } from "@/components/ui/section-backdrop";
import { EmptyState } from "@/components/ui/empty-state";
import { PaginatedGrid } from "@/components/ui/paginated-grid";
import { ExperienceEntryCard } from "@/components/cards/experience-entry";
import { experienceEntries } from "@/data/experience";

export function Experience() {
  const entryItems = experienceEntries.map((entry) => (
    <ExperienceEntryCard key={`${entry.organization}-${entry.period}`} {...entry} />
  ));

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-accent/30 px-6 py-16 md:px-12 md:py-24"
    >
      <SectionBackdrop />
      <div className="relative mx-auto flex max-w-content flex-col gap-10">
        <Reveal>
          <SectionHeading label="Experience" title="Where I've worked" />
        </Reveal>

        {experienceEntries.length === 0 ? (
          <Reveal delay={0.1}>
            <EmptyState
              icon={Briefcase}
              title="Work history coming soon"
              description="Roles and responsibilities will be listed here once confirmed."
            />
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <PaginatedGrid
              as="ol"
              items={entryItems}
              gridClassName="flex flex-col"
              pageSize={6}
              label="Experience pagination"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
