import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-input border border-primary/20 bg-primary-light/60 px-3 py-1 text-xs font-medium text-primary-dark",
        className
      )}
    >
      {children}
    </span>
  );
}
