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
      'enormes': '2100px',
      'grandes':'1800px',
      'normais': '1600px',
      'notebook': '1440px',
      'tablet': '768px',
      'mobileG': '425px',
      'mobileM': '375px',
      'mobileP': '320px'
     }
    },
  },
  plugins: [],
}

