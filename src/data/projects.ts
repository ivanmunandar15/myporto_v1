import type { IconName } from "@/components/ui/icon-map";

export interface Project {
  slug: string;
  category: string;
  /** Icon shown on the card preview when no real screenshot exists yet. */
  icon: IconName;
  /**
   * Path to a real screenshot, e.g. "/images/projects/<slug>.png" (place the
   * file in /public/images/projects/). Leave undefined to fall back to the
   * icon placeholder — do not point this at a file that doesn't exist.
   */
  imageSrc?: string;
  title: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
}

// Titles are drawn from the confirmed "Potential Projects" list in
// PROJECT_CONTEXT.txt. Descriptions are intentionally general — pending
// confirmation of real scope, screenshots, and links. Do not add metrics,
// outcomes, or clients that are not confirmed. Add a real screenshot at
// /public/images/projects/<slug>.png and swap it into ProjectCard once
// available (see components/cards/project-card.tsx).
export const projects: Project[] = [
  {
    slug: "laboratory-equipment-management-system",
    category: "Laboratory Digitalization",
    icon: "flask-conical",
    imageSrc: "/images/projects/laboratory-equipment-management-system.jpg",
    title: "Laboratory Equipment Management System",
    description:
      "A system for tracking laboratory equipment, calibration schedules, and usage records.",
    technologies: ["Next.js", "PostgreSQL", "TypeScript"],
    projectUrl: undefined,
    githubUrl: undefined,
  },
  {
    slug: "Company-Website & E-commerce",
    category: "Web Development",
    icon: "code-2",
    imageSrc: "/images/projects/company-website-e-commerce.jpg",
    title: "Company Website & e-commerce",
    description:
      "A modern website and e-commerce platform for a fictional company.",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    projectUrl: undefined,
    githubUrl: undefined,
  },
  {
    slug: "hydroponics-monitoring-system",
    category: "IoT",
    icon: "cpu",
    imageSrc: "/images/projects/hydroponics-monitoring-system.png",
    title: "Hydroponics Monitoring System",
    description:
      "Real-time monitoring of a hydroponic setup using embedded sensors and a web dashboard.",
    technologies: ["ESP8266", "React", "IoT"],
    projectUrl: undefined,
    githubUrl: undefined,
  },
  {
    slug: "solar-energy-monitoring-system",
    category: "Instrumentation",
    icon: "gauge",
    imageSrc: "/images/projects/solar-energy-monitoring-system.png",
    title: "Solar Energy Monitoring System",
    description:
      "Measurement and monitoring of solar energy output using electrical instrumentation.",
    technologies: ["Electrical Measurement", "ESP32", "Dashboard"],
    projectUrl: undefined,
    githubUrl: undefined,
  },
  {
    slug: "Electronic Supply Chain Management",
    category: "Supply Chain",
    icon: "zap",
    imageSrc: "/images/projects/electronic-supply-chain-management.png",
    title: "Electronic Supply Chain Management",
    description:
      "A system for managing the flow of electronic components from suppliers to manufacturers.",
    technologies: ["Inventory Management", "Supply Chain", "Database"],
    projectUrl: undefined,
    githubUrl: undefined,
  },
  {
    slug: "DDoS attack detection and mitigation system",
    category: "Cybersecurity",
    icon: "shield-check",
    imageSrc: "/images/projects/ddos-attack-detection-mitigation-system.png",
    title: "DDoS Attack Detection and Mitigation System",
    description:
      "A system for identifying and mitigating Distributed Denial of Service (DDoS) attacks.",
    technologies: ["Network Security", "Python", "Machine Learning"],
    projectUrl: undefined,
    githubUrl: undefined,
  },
];
