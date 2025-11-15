/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF800F",
        secondary: "#001064",
        light: "#F6F7F8",
        dark: "#010A35",
        grayCustom: "#696E77",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        15: "3.75rem", // custom spacing if needed
        18: "4.5rem",
      },
      maxHeight: {
        15: "3.75rem", // match navbar logo
        18: "4.5rem",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      boxShadow: {
        navbar: "0 2px 12px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        lg: "0.75rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
