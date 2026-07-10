import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#14151A",      // page background
        ink: "#F5F3EE",     // primary text
        muted: "#8B8D96",   // secondary text
        line: "#2A2C33",    // hairline dividers
        accent: "#E8B923",  // gold, from the Belgian flag
        gold: "#E8B923",
        red: "#C23B3B",     // from the Taiwan flag
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
