/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#222222",
      "black-dull": "#3B3B3B",
      grey: "#AFAFAF",
      "grey-light": "#EDEDED",
      white: "#FFFFFF",
      powder: "#E7C4A1",
    },
    fontFamily: {
      roboto: "Roboto, sans-serif",
      "nova-cut": "Nova Cut, sans-serif",
    },
    extend: {},
  },
  plugins: [require("@headlessui/tailwindcss")],
};
