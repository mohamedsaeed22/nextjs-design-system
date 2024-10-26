import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--primary)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "hsl(var(--primary)/.7)",
          foreground: "hsl(var(--foreground)/.7)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
