import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Footer } from "@/components/layout/footer";
import { personalInfo, socialLinks } from "@/data/social";
import { siteConfig } from "@/data/site";
import { isPlaceholder } from "@/lib/utils";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${personalInfo.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: personalInfo.name, url: siteConfig.url }],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: personalInfo.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  // Once you verify the domain in Google Search Console, it will give you a
  // string to paste here, e.g.:
  // verification: { google: "abc123..." },
};

/**
 * schema.org Person structured data — helps search engines understand this
 * page is a professional profile (name, job title, skills) rather than
 * generic content, which is what enables richer search results. Built
 * server-side from the same data the page already renders, and filters out
 * any social link that's still an unfilled "[PLACEHOLDER]" so nothing false
 * ends up in the structured data.
 */
function PersonJsonLd() {
  const sameAs = socialLinks
    .filter((link) => link.icon !== "mail" && !isPlaceholder(link.href))
    .map((link) => link.href);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: siteConfig.description,
    url: siteConfig.url,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    knowsAbout: [
      "Electrical Engineering",
      "Laboratory Testing",
      "IoT",
      "Embedded Systems",
      "Software Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- static, server-built JSON, not user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <PersonJsonLd />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-input focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-medium focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <MobileNav />
          <Sidebar />
          <div className="md:pl-[248px]">
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </MotionConfig>
      </body>
    </html>
  );
}
