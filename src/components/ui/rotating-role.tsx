"use client";

import { useEffect, useState } from "react";

interface RotatingRoleProps {
  roles: string[];
  className?: string;
}

/**
 * Cross-fades between role labels every few seconds. Justified as a small,
 * isolated client component for a specific interactive flourish — the rest
 * of the hero stays server-rendered. Stops cycling under
 * prefers-reduced-motion so text isn't changing unexpectedly for people who
 * asked for reduced motion.
 */
export function RotatingRole({ roles, className }: RotatingRoleProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length <= 1) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(id);
  }, [roles.length]);

  const current = roles[index] ?? roles[0] ?? "";

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      <span key={current} className="inline-block animate-fade-swap">
        {current}
      </span>
    </span>
  );
}
