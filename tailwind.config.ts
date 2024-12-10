import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#012432",
        primary: "#C6F432",
        success: "#4CAF50",
        danger: "#FF5252",
        warning: "#FFC107",
        // Additional shades for depth
        "background-light": "#023447",
        "background-dark": "#011824",
        "primary-dark": "#A8D41B",
        "primary-light": "#D1F55C",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        'progress-fill': "progress-fill 0.5s ease-out forwards",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        'progress-fill': {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress-width)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;