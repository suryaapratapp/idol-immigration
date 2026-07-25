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
        midnight: "#071d33",
        ink: "#0b2238",
        ocean: "#d71920",
        cyan: "#ff4b55",
        gold: "#d71920",
        ivory: "#f7f8fb",
        mist: "#eef3f8",
        graphite: "#1f2937"
      },
      boxShadow: {
        glow: "0 16px 44px rgba(7, 29, 51, 0.22)",
        gold: "0 18px 48px rgba(227, 27, 35, 0.24)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 20% 20%, rgba(7,29,51,.12), transparent 30%), radial-gradient(circle at 82% 8%, rgba(227,27,35,.14), transparent 28%)"
      }
    }
  },
  plugins: [forms]
};

export default config;
