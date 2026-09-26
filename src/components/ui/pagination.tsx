import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  label: string;
}

/**
 * Controlled pagination control: purely presentational, holds no state of
 * its own. Used inside `PaginatedGrid` (see components/ui/paginated-grid.tsx)
 * but kept separate so any future paginated view can reuse just the control.
 */
export function Pagination({ currentPage, totalPages, onPageChange, label }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label={label} className="flex items-center justify-center gap-1.5 pt-2">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-input border border-border text-ink-secondary transition-colors duration-200 ease-editorial hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <ChevronLeft size={16} strokeWidth={1.75} aria-hidden="true" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-input font-mono text-sm font-medium transition-colors duration-200 ease-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            page === currentPage
              ? "bg-primary-light text-primary-dark"
              : "text-ink-secondary hover:bg-primary-light/60 hover:text-primary-dark"
          )}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-input border border-border text-ink-secondary transition-colors duration-200 ease-editorial hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <ChevronRight size={16} strokeWidth={1.75} aria-hidden="true" />
      </button>
    </nav>
  );
}
