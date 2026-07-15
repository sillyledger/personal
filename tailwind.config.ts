import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#14151A",       // page background — near-black
        card: "#1B1C22",     // card / surface background
        border: "#2a2b32",   // hairline dividers, card borders
        ink: "#F5F3EE",      // primary text — off-white
        muted: "#9a9a9f",    // secondary text
        faint: "#6f6f75",    // tertiary / caption text
        accent: "#E8B923",   // gold
        gold: "#E8B923",
        red: "#C23B3B",      // from the Taiwan flag, unchanged
      },
      fontFamily: {
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        body: ["20px", { lineHeight: "35px" }],
      },
    },
  },
  plugins: [],
};

export default config;