/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#577B8D",
        secondary: "#344C64",
        background: "#F1F8E8",
        highlight: "#ade25d",
        accent: "#240750",
      },
      fontFamily: {
   
        libre: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};
