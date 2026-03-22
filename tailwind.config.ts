import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        background: "#04040A",
        surface: "#0A0A14",
        "surface-2": "#101020",
        border: "rgba(255,255,255,0.07)",
        "border-hover": "rgba(255,255,255,0.15)",
        mint: "#16A34A",
        "mint-dim": "#15803D",
        electric: "#4D6EFF",
        "text-primary": "#EEEEFF",
        "text-secondary": "#8080A0",
        "text-muted": "#4A4A65",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(77,110,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(77,110,255,0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,255,178,0.12) 0%, rgba(77,110,255,0.08) 40%, transparent 70%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)",
        "mint-glow":
          "radial-gradient(ellipse at center, rgba(0,255,178,0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-spin": "borderSpin 4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        mint: "0 0 40px rgba(0,255,178,0.15), 0 0 80px rgba(0,255,178,0.05)",
        electric: "0 0 40px rgba(77,110,255,0.2), 0 0 80px rgba(77,110,255,0.08)",
        card: "0 1px 1px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-hover":
          "0 1px 1px rgba(0,0,0,0.5), 0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(0,255,178,0.15)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
