/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*/.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        space: ["monoSpace", "sans-serif"],
      },
      colors: {
        brightRed: "hsl(12,88%,59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 41%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 92%)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
