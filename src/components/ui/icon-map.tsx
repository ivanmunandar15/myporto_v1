import {
  Zap,
  FlaskConical,
  ShieldCheck,
  Cpu,
  Code2,
  Gauge,
  Linkedin,
  Github,
  Mail,
  type LucideIcon,
  Instagram,
  Globe,
} from "lucide-react";

/**
 * Central registry mapping the icon identifiers used in /src/data to their
 * Lucide component. Keeps data files free of JSX/component imports and
 * ensures every icon in the app shares the same library and stroke weight.
 */
export const iconMap = {
  zap: Zap,
  "flask-conical": FlaskConical,
  "shield-check": ShieldCheck,
  cpu: Cpu,
  "code-2": Code2,
  gauge: Gauge,
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  instagram: Instagram,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;
