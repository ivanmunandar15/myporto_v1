export interface NavItem {
  label: string;
  href: string;
}

// Section order mirrors PROJECT_CONTEXT.txt: About -> Expertise -> Projects
// -> Experience -> Skills -> Certifications -> Contact.
export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
