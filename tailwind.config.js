// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,ts,tsx}', 
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width', 
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        300: '300ms', 
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out', 
      },
      screens: {
        'xs': '475px',  
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px',
        'xl': '1280px', 
        '2xl': '1536px', 
      },
    },
  },
  plugins: [],
};
