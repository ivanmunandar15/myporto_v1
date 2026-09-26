import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SectionBackdrop } from "@/components/ui/section-backdrop";
import { EmptyState } from "@/components/ui/empty-state";
import { PaginatedGrid } from "@/components/ui/paginated-grid";
import { CertificationCard } from "@/components/cards/certification-card";
import { certifications } from "@/data/certifications";
import { groupBy } from "@/lib/utils";

export function Certifications() {
  // Grouped by whatever `category` values appear in the data, in
  // first-seen order — see the comment in data/certifications.ts.
  const grouped = groupBy(certifications, (cert) => cert.category);
  const categories = Object.keys(grouped);

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-accent/30 px-6 py-16 md:px-12 md:py-24"
    >
      <SectionBackdrop />
      <div className="relative mx-auto flex max-w-content flex-col gap-10">
        <Reveal>
          <SectionHeading label="Certifications & education" title="Credentials" />
        </Reveal>

        {certifications.length === 0 ? (
          <Reveal delay={0.1}>
            <EmptyState
              icon={GraduationCap}
              title="Credentials coming soon"
              description="Certifications and education will be listed here once confirmed."
            />
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-12">
              {categories.map((category) => {
                const items = grouped[category] ?? [];
                const cardItems = items.map((cert) => (
                  <CertificationCard key={`${cert.title}-${cert.issuer}`} {...cert} />
                ));

                return (
                  <div key={category} className="flex flex-col gap-4">
                    <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                      {category}
                      <span className="ml-2 text-ink-muted">({items.length})</span>
                    </h3>
                    <PaginatedGrid
                      items={cardItems}
                      gridClassName="grid grid-cols-1 gap-4 sm:grid-cols-2"
                      pageSize={6}
                      label={`${category} certifications pagination`}
                    />
                  </div>
                );
              })}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
