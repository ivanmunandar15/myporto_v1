export interface ExpertiseItem {
  icon: "zap" | "flask-conical" | "shield-check" | "cpu" | "code-2" | "gauge";
  title: string;
  description: string;
}

// Reflects the professional areas defined in PROJECT_CONTEXT.txt.
// Keep this data-driven so the set of cards can change without touching JSX.
export const expertiseItems: ExpertiseItem[] = [
  {
    icon: "zap",
    title: "Electrical Engineering",
    description:
      "Core discipline behind every system I build — from circuit-level design to power and control systems.",
  },
  {
    icon: "flask-conical",
    title: "Laboratory Testing",
    description:
      "Hands-on testing work in accredited lab environments, following structured technical procedures.",
  },
  {
    icon: "shield-check",
    title: "SNI / IEC Product Testing",
    description:
      "Product compliance testing against SNI and IEC standards, from setup to result documentation.",
  },
  {
    icon: "cpu",
    title: "IoT Development",
    description:
      "Connected devices built on ESP32 / ESP8266, linking physical sensors to usable digital data.",
  },
  {
    icon: "code-2",
    title: "Software & Web Development",
    description:
      "Web applications and dashboards that turn engineering and lab data into something people can act on.",
  },
  {
    icon: "gauge",
    title: "Instrumentation & Measurement",
    description:
      "Sensor selection, calibration awareness, and measurement accuracy across electrical and physical parameters.",
  },
];
