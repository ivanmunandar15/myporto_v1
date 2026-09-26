import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PaginatedGrid } from "@/components/ui/paginated-grid";
import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  const projectItems = projects.map((project) => (
    <ProjectCard key={project.slug} {...project} />
  ));

  return (
    <section id="projects" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <Reveal>
          <SectionHeading
            label="Featured projects"
            title="Selected work"
            description="A mix of laboratory digitalization, IoT, and monitoring systems. Details are placeholders pending confirmation."
            align="split"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <PaginatedGrid
            items={projectItems}
            gridClassName="grid grid-cols-1 gap-5 sm:grid-cols-2"
            pageSize={6}
            label="Projects pagination"
          />
        </Reveal>
      </div>
    </section>
  );
}
