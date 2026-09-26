import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionBackdrop } from "@/components/ui/section-backdrop";
import { CircuitLines } from "@/components/ui/circuit-lines";
import { RotatingRole } from "@/components/ui/rotating-role";
import { CodeShowcase } from "@/components/ui/code-showcase";
import { personalInfo } from "@/data/social";
import { heroRoles } from "@/data/roles";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col gap-10 overflow-hidden px-6 pb-16 pt-14 md:px-12 md:pb-24 md:pt-20 lg:flex-row lg:items-center lg:gap-16"
    >
      <SectionBackdrop variant="mesh" />
      <CircuitLines className="pointer-events-none absolute -right-16 -top-16 hidden h-[420px] w-[420px] lg:block" />

      <Reveal className="relative flex max-w-2xl flex-col gap-6">
        <span className="inline-flex items-center gap-2">
          <span className="h-px w-6 bg-gradient-to-r from-primary to-transparent" aria-hidden="true" />
          <span className="font-mono text-sm tracking-wide text-primary">Hello, I&apos;m</span>
        </span>
        <h1 className="font-heading text-hero-mobile font-semibold text-ink md:text-hero-desktop">
          {personalInfo.name}
        </h1>
        <p className="flex flex-wrap items-baseline gap-2 font-heading text-xl font-medium text-ink-secondary md:text-2xl">
          <RotatingRole roles={heroRoles} className="text-primary-dark" />
          <span>building the bridge between hardware and software.</span>
        </p>
        <p className="max-w-lg text-base leading-relaxed text-ink-secondary">
          I work across electrical engineering, laboratory testing, and IoT —
          then carry that same precision into the software and dashboards
          that make those systems usable.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <LinkButton href="#projects" variant="primary" className="group">
            View my work
            <ArrowRight
              size={16}
              strokeWidth={1.75}
              aria-hidden="true"
              className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5"
            />
          </LinkButton>
          <LinkButton href="#contact" variant="secondary">
            Contact me
          </LinkButton>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="relative w-full flex-1">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-card border border-primary/20 bg-surface shadow-elevated lg:ml-auto lg:mr-0">
          {personalInfo.photoSrc ? (
            <Image
              src={personalInfo.photoSrc}
              alt={personalInfo.name}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="object-cover"
            />
          ) : (
            <>
              <div aria-hidden="true" className="absolute inset-0 bg-grid" />
              <div
                aria-hidden="true"
                className="absolute inset-6 rounded-input border border-dashed border-primary/25"
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="flex flex-col items-center gap-1 rounded-input border border-primary/25 bg-surface px-6 py-4">
                  <span className="font-mono text-2xl font-semibold tracking-wide text-primary-dark">
                    {personalInfo.initials}
                  </span>
                  <span className="h-px w-10 bg-primary/30" aria-hidden="true" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                    Ref. Portrait Pending
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="relative z-10 -mt-16 hidden pl-6 sm:block lg:absolute lg:-bottom-10 lg:-left-16 lg:mt-0 lg:pl-0">
          <CodeShowcase />
        </div>
      </Reveal>
    </section>
  );
}
