/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "500px",
      desktop: "1000px",
    },
    fontFamily: {
      IRANSanse: "IRANSansLight",
      Iranyek: "Iranyek",
    },
    extend: {
        animation: {
        fadeInDown: "fadeInDown 2s linear",
        fadeInRight: "fadeInRight 1s linear",
        zoomIn: "zoomIn 2s linear",
      },
     backgroundImage: {
        kitchen: "url('/public/images/imag.png')",
      },
    },
   },
  plugins: [],
};
