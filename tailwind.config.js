/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    fontFamily: {
        'fontFam': ['Outfit', 'cursive', 'Monoton', 'sans-serif'],
      },  
      
    extend: { 

      colors: {
      'gris': '#515051', 
      'verde': '#2A5B45', 
      'h2': '#2b2a2b', 
      'pColor': '#111827', 
      'colorBorder': '#E3DED7', 
      'hover': '#F7F5F3', 
      'contact': '#E3DED7', 
      'cont': '#6B7280', 
      'label': '#374151', 
      'input': '#D1D5DB'
      
      }, 

      boxShadow: {
        'boxSha': '0 4px 4px rgba(0, 0, 0, 0.251)', 
        'boxShaGris': '0 1px 4px rgba(227, 222, 215, 0.8)', 

      }, 

      backgroundImage: {
        'imgMainTwo': "url('./assets/BackgroundMain.jpeg')",
      }, 

      dropShadow: { 
        'txtShaNew': '0px 4px 4px #00000040'
      },  

      width: {
        'preguntasW': '668px', 
        'salonCafeDeAltura': '900px;'
      }, 
      height: { 
        'salonCafeDeAltura': '450px'
      }

    },
  },
  plugins: [],
}
