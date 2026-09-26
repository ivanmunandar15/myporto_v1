export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Laboratory Technician",
    organization: "PT. Anindya Certification & Testing",
    period: "2025 — Present",
    summary:
      "Performed laboratory testing and analysis in accordance with established protocols.",
    highlights: [
      "Executed tests on electronic components and systems.",
      "Maintained laboratory equipment and ensured compliance with safety standards.",
      "Documented test results and prepared reports for management review.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    organization: "PT. Telkom Indonesia Tbk",
    period: "2024",
    summary:
      "Developed and maintained web applications using modern technologies.",
    highlights: [
      "Designed and implemented RESTful APIs for backend services.",
      "Built responsive user interfaces using React and Angular.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
    ],
  },
];
