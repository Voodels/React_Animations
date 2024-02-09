/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "LMC": "var(--primary-color)",
        "DMC": "var(--secondary-color)"
      },
    },
  },
  plugins: [],
  darkMode:'class'
}