import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F6F4EE",      // page background — cream
        ink: "#17171A",     // primary text — near-black
        muted: "#5C5B54",   // secondary text — darkened for legibility on cream
        line: "#E4E1D8",    // hairline dividers, light
        accent: "#B8873A",  // muted amber gold
        gold: "#B8873A",
        red: "#C23B3B",     // from the Taiwan flag, unchanged
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Archivo"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
