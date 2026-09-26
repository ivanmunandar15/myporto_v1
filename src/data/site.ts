import { personalInfo } from "@/data/social";

/**
 * Single source of truth for the deployed domain and site-wide SEO copy.
 * `layout.tsx`, `sitemap.ts`, `robots.ts`, and the JSON-LD structured data
 * all read `url` from here — update it once instead of in four places.
 */
export const siteConfig = {
  // TODO: replace with the real purchased domain, e.g. "https://ivanmunandar.com"
  // (no trailing slash).
  url: "https://[YOUR_DOMAIN]",
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description:
    "Portfolio of Ivan Munandar, an electrical engineer working across laboratory testing, instrumentation, IoT, and software development.",
  // Natural-language terms someone hiring for this combination of skills
  // might actually search for — not stuffed, just literal and honest.
  keywords: [
    "Ivan Munandar",
    "Electrical Engineer",
    "Laboratory Testing Engineer",
    "SNI IEC Product Testing",
    "IoT Developer",
    "Embedded Systems",
    "ESP32 Developer",
    "Web Developer Portfolio",
  ],
} as const;
