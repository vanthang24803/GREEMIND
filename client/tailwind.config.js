/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        grey: "#e5e5dc",
        glass: "rgba(255,255,255,0.45)",
        transparentBlack : "rgba(0,0,0,0.7)"
      },
      textShadow: {
        'default': '0 2px 0 #000',
        'md': '0 6px 8px #B0B0B0',
        'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
        'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
     },
     fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
      'domine': ['Domine', 'sans-serif'],
    }
    },
    
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}