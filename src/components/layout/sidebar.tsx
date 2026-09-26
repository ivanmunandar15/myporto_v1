import { Download } from "lucide-react";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { iconMap } from "@/components/ui/icon-map";
import { isPlaceholder } from "@/lib/utils";
import { personalInfo, socialLinks } from "@/data/social";

/**
 * Persistent left sidebar shown at md breakpoint and above.
 * Hidden on mobile in favor of MobileNav (see components/layout/mobile-nav.tsx).
 */
export function Sidebar() {
  // Never link out to an unfilled placeholder URL or a CV file that
  // doesn't exist yet in /public — an honest gap beats a dead link.
  const readySocialLinks = socialLinks.filter((link) => !isPlaceholder(link.href));

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[248px] flex-col justify-between overflow-hidden border-r border-border bg-surface px-6 py-8 md:flex">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" />

      <div className="relative flex flex-col gap-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-input bg-gradient-primary font-mono text-sm font-semibold text-white">
            {personalInfo.initials}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-sm font-semibold text-ink">
              {personalInfo.name}
            </span>
            <span className="text-xs text-ink-muted">{personalInfo.title}</span>
          </span>
        </a>

        <SidebarNav />
      </div>

      <div className="relative flex flex-col gap-4">
        <div className="rounded-card border border-primary/20 bg-primary-light/50 p-4">
          <p className="flex items-center gap-2 font-mono text-xs font-medium text-primary-dark">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            {personalInfo.availability}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
            Reach out for engineering, testing, or IoT projects.
          </p>
        </div>

        {personalInfo.cvAvailable ? (
          <a
            href={`/${personalInfo.cvFileName}`}
            className="flex items-center justify-between rounded-input border border-border px-3 py-2.5 text-xs font-medium text-ink transition-colors duration-200 ease-editorial hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="truncate">{personalInfo.cvFileName}</span>
            <Download size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
        ) : null}

        {readySocialLinks.length > 0 ? (
          <div className="flex items-center gap-3 pt-1">
            {readySocialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors duration-200 ease-editorial hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </aside>
  );
}
