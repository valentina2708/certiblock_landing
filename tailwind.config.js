/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b7080",
        secondary: "#3a5743",
        background: "#cfffb3",
        highlight: "#ade25d",
        accent: "#fcec52",
      },
      fontFamily: {
   
        libre: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};
