import { ArrowLeft } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { SectionBackdrop } from "@/components/ui/section-backdrop";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <SectionBackdrop />
      <span className="relative font-mono text-sm font-medium tracking-wide text-primary">
        404
      </span>
      <h1 className="relative font-heading text-3xl font-semibold text-ink md:text-4xl">
        This page doesn&apos;t exist
      </h1>
      <p className="relative max-w-sm text-base leading-relaxed text-ink-secondary">
        The page you&apos;re looking for may have been moved or never existed.
      </p>
      <LinkButton href="/" variant="primary" className="relative group">
        <ArrowLeft
          size={16}
          strokeWidth={1.75}
          aria-hidden="true"
          className="transition-transform duration-300 ease-editorial group-hover:-translate-x-0.5"
        />
        Back to home
      </LinkButton>
    </section>
  );
}
