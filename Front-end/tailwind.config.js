/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      'poppins':['Poppins', 'sans-serif']
     },
     colors:{
      corTexto:{
        100: '#F4F4F4'
      }
     },
     screens:{
      '3xl':'2000px',
      'mp': '320px',
      'mm': '450px',
      'mg': '540px'
     }
    },
  },
  plugins: [],
}

