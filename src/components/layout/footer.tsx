import { personalInfo, socialLinks } from "@/data/social";
import { Github, Linkedin, Instagram } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 text-sm text-ink-muted md:flex-row md:items-center">
        <p>
          © {year} {personalInfo.name}. Built with care.
        </p>
        <p>Electrical Engineering · Laboratory Testing · IoT · Software</p>
        <p className="flex items-center gap-4">
          {socialLinks.map((link, index) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            if (!Icon) return null;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-ink-muted transition-colors duration-200 ease-editorial hover:text-primary"
              >
                <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                <span className="sr-only">{link.label}</span>
              </a>
            );
          })}
        </p>
      </div>
    </footer>
  );
}
