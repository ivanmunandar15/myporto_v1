import Link from "next/link";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-primary text-white shadow-subtle hover:shadow-glow-sm focus-visible:outline-primary-dark",
  secondary:
    "bg-transparent text-ink border border-border hover:border-primary hover:text-primary focus-visible:outline-primary",
  ghost:
    "bg-transparent text-ink-secondary hover:text-primary focus-visible:outline-primary",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-input px-6 py-3 text-sm font-medium transition-all duration-300 ease-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

interface LinkButtonProps extends ComponentPropsWithoutRef<typeof Link> {
  variant?: ButtonVariant;
}

/** Same visual treatment as Button, for navigational (anchor) actions. */
export function LinkButton({
  className,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  return (
    <Link className={cn(baseClasses, variantClasses[variant], className)} {...props} />
  );
}
