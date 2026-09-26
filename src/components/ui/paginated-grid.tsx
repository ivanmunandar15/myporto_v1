"use client";

import { useState, type ElementType, type ReactNode } from "react";
import { Pagination } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface PaginatedGridProps {
  /** Pre-rendered items (e.g. `projects.map((p) => <ProjectCard key={p.slug} {...p} />)`). */
  items: ReactNode[];
  /** Wrapper classes for the grid/list itself (grid columns, gaps, etc.). */
  gridClassName: string;
  /** Items per page. Pagination controls only appear once this is exceeded. */
  pageSize?: number;
  /** Accessible name for the pagination nav, e.g. "Projects pagination". */
  label: string;
  /** Wrapper element tag — use "ol"/"ul" when `items` are `<li>` elements. */
  as?: ElementType;
}

/**
 * Kept as a small, isolated client component (page number is local UI state,
 * not something that needs to survive a refresh or be shareable as a URL) so
 * every section that lists more than a handful of entries — projects,
 * certifications, experience — can reuse the same pagination behavior
 * without duplicating slicing logic.
 */
export function PaginatedGrid({
  items,
  gridClassName,
  pageSize = 6,
  label,
  as: Wrapper = "div",
}: PaginatedGridProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const start = (page - 1) * pageSize;
  const visible = items.slice(start, start + pageSize);

  function handlePageChange(next: number) {
    setPage(next);
  }

  return (
    <div className="flex flex-col gap-8">
      <Wrapper className={cn(gridClassName)}>{visible}</Wrapper>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        label={label}
      />
    </div>
  );
}
