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
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
  },
  plugins: [],
};
