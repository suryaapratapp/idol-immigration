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
        midnight: "#06111f",
        ink: "#0b1726",
        ocean: "#163d63",
        cyan: "#7bd3f4",
        gold: "#c9a45d",
        ivory: "#faf7f0",
        mist: "#eef4f6",
        graphite: "#1d2433"
      },
      boxShadow: {
        glow: "0 16px 44px rgba(22, 61, 99, 0.22)",
        gold: "0 18px 48px rgba(201, 164, 93, 0.24)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 20% 20%, rgba(123,211,244,.12), transparent 30%), radial-gradient(circle at 82% 8%, rgba(201,164,93,.16), transparent 28%)"
      }
    }
  },
  plugins: [forms]
};

export default config;
