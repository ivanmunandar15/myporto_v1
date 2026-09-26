import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names, resolving conflicting Tailwind utility classes
 * (e.g. `cn("px-2", condition && "px-4")` keeps only the last px-* value).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * True if a value still contains an unfilled "[LIKE-THIS]" placeholder.
 * Used to avoid rendering dead links (e.g. a social href or CV path that
 * hasn't been filled in yet) — an unfinished link is worse for a portfolio
 * than simply not showing it.
 */
export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true;
  return /\[.+\]/.test(value);
}

/**
 * Groups a list into an ordered Record keyed by `keyFn(item)`, preserving
 * first-seen key order (so category order follows the data file, not
 * object-key sort order). Used to group certifications by category without
 * hardcoding the category list anywhere.
 */
export function groupBy<T>(items: T[], keyFn: (item: T) => string): Record<string, T[]> {
  const groups: Record<string, T[]> = {};
  for (const item of items) {
    const key = keyFn(item);
    (groups[key] ??= []).push(item);
  }
  return groups;
}
