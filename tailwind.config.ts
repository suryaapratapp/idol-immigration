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
        midnight: "#07111f",
        ink: "#0d1b2e",
        ocean: "#12355b",
        cyan: "#32d6ff",
        gold: "#d6aa43",
        ivory: "#f7f3ea",
        mist: "#eaf2f6",
        graphite: "#1d2433"
      },
      boxShadow: {
        glow: "0 0 48px rgba(50, 214, 255, 0.22)",
        gold: "0 18px 60px rgba(214, 170, 67, 0.22)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 20% 20%, rgba(50,214,255,.18), transparent 28%), radial-gradient(circle at 80% 5%, rgba(214,170,67,.14), transparent 26%)"
      }
    }
  },
  plugins: [forms]
};

export default config;
