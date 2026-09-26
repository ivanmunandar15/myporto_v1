import { tr } from "motion/react-client";

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "instagram";
}

// Replace each placeholder href with the real profile URL.
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ivan-munandar-b917512a7/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/ivanmunandar15", icon: "github" },
  { label: "Instagram", href: "https://www.instagram.com/ivan_munandar_/", icon: "instagram" },
];

export const personalInfo = {
  name: "Ivan Munandar",
  initials: "IM",
  title: "Electrical Engineer",
  subtitle: "Laboratory Testing · IoT · Software Development",
  location: "Tangerang, Indonesia",
  email: "Ivanmunandar15@gmail.com",
  phone: "081384580141",
  availability: "Open to new opportunities",
  cvFileName: "Ivan_Munandar_CV.pdf",
  cvAvailable: true,
  photoSrc: "/images/profile-photo.jpg" as string | undefined,
};
