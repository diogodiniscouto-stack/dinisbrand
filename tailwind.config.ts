import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        // Founder Toolkit accent
        accent: {
          DEFAULT: "#3B5BFF",
          50: "#EEF1FF",
          100: "#E0E6FF",
          200: "#C7D1FF",
          300: "#A5B4FF",
          400: "#7C8FFF",
          500: "#3B5BFF",
          600: "#2E48E6",
          700: "#2439B4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.045em",
        tightest: "-0.06em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,24,40,0.04), 0 4px 16px rgba(16,24,40,0.06)",
        card: "0 1px 3px rgba(16,24,40,0.05), 0 12px 40px -12px rgba(16,24,40,0.12)",
        float: "0 24px 60px -24px rgba(16,24,40,0.22)",
        glow: "0 0 0 1px rgba(59,130,246,0.14), 0 20px 60px -20px rgba(59,130,246,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at center, rgba(16,24,40,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
