/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseYellow: "#FFCB46",
        basePink: "#FF81CC",
        basePurple: "#D661FF",
        baseGreen: "#55D98E",
        baseBlue: "#01FDF6",
      },
      boxShadow: {
        base: "7px 7px 0 0 #000",
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/line-clamp"),
      require("@tailwindcss/forms"),
  ],
};
