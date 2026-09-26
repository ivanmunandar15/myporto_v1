"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/nav";

/**
 * Highlights the nav item for the section currently in view.
 * Isolated as its own small client component so the rest of the sidebar
 * (logo, availability card, CV download, socials) stays server-rendered.
 */
export function SidebarNav() {
  const [activeHref, setActiveHref] = useState<string>(navItems[0]?.href ?? "");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Section navigation" className="flex flex-col gap-1">
      {navItems.map((item) => {
        const isActive = item.href === activeHref;
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "rounded-input px-3 py-2 text-sm font-medium transition-colors duration-200 ease-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              isActive
                ? "bg-primary-light text-primary-dark"
                : "text-ink-secondary hover:bg-primary-light/60 hover:text-primary-dark"
            )}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
