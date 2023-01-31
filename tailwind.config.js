/** @type {import('tailwindcss').Config} */ module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090a",
        red: "#c42311",
        orange: "#f2502c",
        blue: "#3e5954",
      },
      fontFamily: {
        regular: " Roboto_400Regular",
        semibold: "Roboto_500Medium",
        bold: "Roboto_700Bold",
      },
    },
  },
  plugins: [],
};
