import { techStack } from "@/data/tech-stack";

/**
 * Continuous horizontal strip of tools/technologies. Built with a pure CSS
 * keyframe animation (see .animate-marquee in globals.css) so it needs no
 * client-side JavaScript. Automatically stops under prefers-reduced-motion
 * via the global animation override in globals.css.
 */
export function TechMarquee() {
  // Duplicated once so the track can loop seamlessly at translateX(-50%).
  const track = [...techStack, ...techStack];

  return (
    <section
      aria-label="Tools and technologies"
      className="border-y border-border bg-surface py-6"
    >
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />

        <ul className="flex w-max animate-marquee items-center gap-10 [animation-play-state:running] group-hover:[animation-play-state:paused]">
          {track.map((tech, i) => (
            <li
              key={`${tech}-${i}`}
              className="whitespace-nowrap font-mono text-sm font-medium text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
