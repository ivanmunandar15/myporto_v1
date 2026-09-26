"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { personalInfo } from "@/data/social";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-input bg-gradient-primary font-mono text-xs font-semibold text-white">
            {personalInfo.initials}
          </span>
          <span className="font-heading text-sm font-semibold text-ink">
            {personalInfo.name}
          </span>
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav-drawer"
          aria-label="Section navigation"
          className="flex flex-col gap-1 border-t border-border px-4 py-3"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-input px-2 py-2.5 text-sm font-medium text-ink-secondary transition-colors duration-200 hover:bg-primary-light/60 hover:text-primary-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
