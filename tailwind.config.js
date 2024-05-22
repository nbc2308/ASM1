/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        bgColor: "#003F62",
        primaryColor: "#FFFFFF",
        secondaryColor: "#EDA415",
        textColor: "#1B5A7D",
        textPColor: "#4A4A4A",
        textSColor: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
