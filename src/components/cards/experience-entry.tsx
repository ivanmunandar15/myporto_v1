import type { ExperienceEntry } from "@/data/experience";

export function ExperienceEntryCard({
  role,
  organization,
  period,
  summary,
  highlights,
}: ExperienceEntry) {
  return (
    <li className="flex flex-col gap-2 border-t border-border py-6 first:border-t-0 first:pt-0 last:pb-0 md:flex-row md:gap-8">
      <span className="shrink-0 font-mono text-sm font-medium text-ink-muted md:w-40">
        {period}
      </span>
      <div className="flex flex-1 flex-col gap-2">
        <div>
          <h3 className="font-heading text-base font-semibold text-ink">{role}</h3>
          <p className="text-sm text-ink-secondary">{organization}</p>
        </div>
        <p className="text-sm leading-relaxed text-ink-secondary">{summary}</p>
        <ul className="flex flex-col gap-1 pl-4 text-sm text-ink-secondary">
          {highlights.map((highlight) => (
            <li key={highlight} className="list-disc">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
