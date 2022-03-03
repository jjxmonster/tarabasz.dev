module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      screens: {
         sm: '640px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
      },
      fontFamily: {
         serif: ['Source Sans Pro'],
      },
      fontSize: {
         xs: '0.75rem',
         sm: '0.875rem',
         base: '1rem',
         lg: '1.125rem',
         xl: '1.20rem',
         '2xl': '1.5rem',
         '3xl': '2rem',
         '3.5xl': '2.25rem',
         '4xl': '2.5rem',
         '5xl': '3.3125rem',
         '6xl': '4rem',
      },
      extend: {
         zIndex: {
            negative: '-1',
         },
         colors: {
            gray: '#1D1D1D',
            'gray-100': '#e1e1e1',
            'gray-200': '#919191',
            green: '#1DB954',
            lightgray: 'lightgrey',
         },
      },
   },
   plugins: [],
};
