import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or ["class"] both work
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shell: "var(--color-shell)",
        ink: "var(--color-ink)",
        forest: "var(--color-forest)",
        sand: "var(--color-sand)",
        clay: "var(--color-clay)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", "serif"],
      },
      borderRadius: {
        pill: "9999px",
      },
      boxShadow: {
        collage: "12px 18px 40px rgba(31, 27, 22, 0.12)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // works fine with v4
  ],
};
