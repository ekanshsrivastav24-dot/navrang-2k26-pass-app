import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dandiya: {
          dark: "#0b0914",
          card: "#161226",
          purple: "#7928CA",
          pink: "#FF0080",
          gold: "#FFB800",
          accent: "#FF4D4D",
          neonGreen: "#00FF66",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "festive-glow": "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 40, 202, 0.35), rgba(255, 0, 128, 0.2), transparent)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 15px rgba(255, 184, 0, 0.4))" },
          "100%": { filter: "drop-shadow(0 0 30px rgba(255, 0, 128, 0.8))" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
