/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2a1e38",
        panel: "#3b2a4d",
        gold: "#d4b66a",
        lavender: "#b99bd7",
        ivory: "#f4efe5",
      },
      fontFamily: {
        display: ["Rajdhani", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
