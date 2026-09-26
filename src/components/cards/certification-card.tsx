import { GraduationCap } from "lucide-react";
import type { CertificationEntry } from "@/data/certifications";

export function CertificationCard({ title, issuer, year }: CertificationEntry) {
  return (
    <div className="flex items-start gap-4 rounded-card border border-border bg-surface p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-input bg-gradient-primary text-white">
        <GraduationCap size={20} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-heading text-sm font-semibold text-ink">{title}</h3>
        <p className="font-mono text-xs text-ink-secondary">
          {issuer} · {year}
        </p>
      </div>
    </div>
  );
}
