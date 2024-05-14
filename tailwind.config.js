/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],

        kextralight: ["Kodchasan-ExtraLight", "sans-serif"],
        klight: ["Kodchasan-Light", "sans-serif"],
        kregular: ["Kodchasan-Regular", "sans-serif"],
        kmedium: ["Kodchasan-Medium", "sans-serif"],
        ksemibold: ["Kodchasan-SemiBold", "sans-serif"],
        kbold: ["Kodchasan-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};