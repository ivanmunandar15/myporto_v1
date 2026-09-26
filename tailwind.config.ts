import type { Config } from "tailwindcss";

// Centralized design tokens.
// These map 1:1 to the design system defined in PROJECT_CONTEXT.txt.
// Do not hardcode hex values in components — reference these tokens instead.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#527665",
          dark: "#3F5F52",
          light: "#E5ECE8",
        },
        background: "#FAFAF7",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#1F3442", // primary text
          secondary: "#53636B",
          muted: "#7A878B",
        },
        border: "#E2E7E4",
        accent: "#EDE9DF", // warm accent
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "hero-mobile": ["2.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "hero-desktop": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      spacing: {
        "4.5": "1.125rem",
        18: "4.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        card: "18px",
        input: "12px",
        chip: "8px",
        pill: "9999px",
      },
      boxShadow: {
        subtle: "0 4px 20px rgba(31, 52, 66, 0.04)",
        elevated: "0 10px 30px rgba(31, 52, 66, 0.06)",
        glow: "0 0 0 1px rgba(82, 118, 101, 0.16), 0 12px 32px rgba(82, 118, 101, 0.16)",
        "glow-sm": "0 0 24px rgba(82, 118, 101, 0.28)",
      },
      backgroundImage: {
        // Reuses only the existing palette — no new colors introduced.
        "gradient-primary": "linear-gradient(135deg, #527665 0%, #3F5F52 100%)",
        "gradient-radial-soft":
          "radial-gradient(circle at 30% 20%, rgba(82, 118, 101, 0.16), transparent 60%)",
        "gradient-mesh":
          "radial-gradient(circle at 15% 15%, rgba(82, 118, 101, 0.14), transparent 45%), radial-gradient(circle at 85% 30%, rgba(63, 95, 82, 0.12), transparent 50%), radial-gradient(circle at 50% 90%, rgba(82, 118, 101, 0.10), transparent 55%)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
