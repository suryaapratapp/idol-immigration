import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#10231f",
        ink: "#17201b",
        ocean: "#24685f",
        cyan: "#8fdcc8",
        gold: "#e07a5f",
        ivory: "#fff8ed",
        mist: "#edf7f2",
        graphite: "#27332e"
      },
      boxShadow: {
        glow: "0 16px 44px rgba(36, 104, 95, 0.22)",
        gold: "0 18px 48px rgba(224, 122, 95, 0.24)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 20% 20%, rgba(143,220,200,.14), transparent 30%), radial-gradient(circle at 82% 8%, rgba(224,122,95,.16), transparent 28%)"
      }
    }
  },
  plugins: [forms]
};

export default config;
