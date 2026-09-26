import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { iconMap } from "@/components/ui/icon-map";
import type { Project } from "@/data/projects";

export function ProjectCard({
  category,
  icon,
  imageSrc,
  title,
  description,
  technologies,
  projectUrl,
  githubUrl,
}: Project) {
  const Icon = iconMap[icon];

  return (
    <article className="group flex flex-col gap-4 rounded-card border border-border bg-surface p-5 transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
      <div
        aria-hidden={imageSrc ? undefined : "true"}
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-input border border-primary/15 bg-gradient-radial-soft transition-transform duration-300 ease-editorial group-hover:scale-[1.02]"
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
            loading="eager"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-grid" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-input bg-gradient-primary text-white transition-transform duration-300 ease-editorial group-hover:scale-105">
              <Icon size={26} strokeWidth={1.75} />
            </span>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Badge>{category}</Badge>
        <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-secondary">{description}</p>

        <ul className="flex flex-wrap gap-1.5 pt-1">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-chip bg-primary-light px-2.5 py-1 font-mono text-xs font-medium text-primary-dark"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(projectUrl || githubUrl) && (
          <div className="flex items-center gap-4 pt-2 text-sm font-medium">
            {projectUrl ? (
              <a
                href={projectUrl}
                className="inline-flex items-center gap-1 text-primary hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View project
                <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
              </a>
            ) : null}
            {githubUrl ? (
              <a
                href={githubUrl}
                aria-label={`${title} source code on GitHub`}
                className="inline-flex items-center gap-1 text-ink-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Github size={14} strokeWidth={1.75} aria-hidden="true" />
                Source
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
