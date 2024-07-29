/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "current",
      white: "#fff",
      black: "#000",
      "sky": "#0ea5e9",
      "green": "#22c55e",
      'red': '#dc2626',
      "yellow": "#facc15",
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      h1: ["60px", "68px"],
      "h1-mobile": ["42px", "46px"],
      h2: ["52px", "56px"],
      "h2-mobile": ["35px", "38px"],
    },
  },
  plugins: [],
};
