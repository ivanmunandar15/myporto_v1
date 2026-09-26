export interface SkillGroup {
  category: string;
  icon: "gauge" | "cpu" | "code-2" | "flask-conical";
  items: string[];
}

// Drawn from the "Technical Interests" list in PROJECT_CONTEXT.txt.
// These are technical interest/skill areas, not claimed professional
// experience unless stated elsewhere.
export const skillGroups: SkillGroup[] = [
  {
    category: "Electrical & Instrumentation",
    icon: "gauge",
    items: ["Electrical Measurement", "Instrumentation", "Sensors", "Automation"],
  },
  {
    category: "IoT & Embedded",
    icon: "cpu",
    items: ["ESP32", "ESP8266", "IoT System Design"],
  },
  {
    category: "Software & Web",
    icon: "code-2",
    items: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    category: "Laboratory & Digitalization",
    icon: "flask-conical",
    items: ["Laboratory Digitalization", "Technical Documentation"],
  },
];
