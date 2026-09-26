export interface StoryStep {
  label: string;
  description: string;
}

// Mirrors the CONTENT PRINCIPLE flow in PROJECT_CONTEXT.txt: each
// discipline feeds into the next rather than standing alone.
export const storySteps: StoryStep[] = [
  { label: "Electrical Engineering", description: "The foundation — circuits, power, and control systems." },
  { label: "Laboratory & Testing", description: "Applying that foundation in structured, standards-based testing." },
  { label: "Instrumentation", description: "Measuring and monitoring systems with precision." },
  { label: "IoT", description: "Connecting instruments and sensors into networked devices." },
  { label: "Software", description: "Turning device data into usable tools and dashboards." },
  { label: "Digitalization", description: "Bringing it together into complete technical systems." },
];

// TODO (site owner): personalize this further with specifics about your
// background — this stays intentionally general until you do. Keep any
// notes-to-self in comments like this one, never inside the rendered string.
export const aboutSummary =
  "I work across electrical engineering, laboratory testing, and software — building the connective tissue between physical systems and the tools used to monitor and manage them.";
