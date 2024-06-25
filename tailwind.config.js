/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#F5B700',
          200: '#F6EBCA',
        },
        accent: {
          900: '#272638',
          800: '#3E3E4F',
          700: '#747586',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F0F0F0',
          200: '#F6F6F6',
          300: '#CECECE',
          400: '#747C86',
          950: '#000000',
        },
      },
      fontFamily: {
        montserrat: '"Montserrat", sans-serif',
        raleway: '"Raleway", sans-serif',
      },
      fontSize: {
        'hero-title-clamp': 'clamp(3rem, 2.4rem + 1.5vw, 3.75rem)',
      },
      backgroundImage: {
        'hero-image': 'url("/hero-background.jpg")',
        'hero-image-mobile': 'url("/hero-background-mobile.jpg")',
        'benefits-image': 'url("/benefits-wave.svg")',
      },
      keyframes: {
        pulsing: {
          '0%': {
            'box-shadow': '0 0 0 0 #F5B700',
          },
          '70%': {
            'box-shadow': '0 0 0 10px rgba(0, 0, 0, 0)',
          },
          '100%': {
            'box-shadow': '0 0 0 0 rgba(0, 0, 0, 0)',
          },
        },
      },
      animation: {
        pulsing: 'pulsing 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        service: '0px 0px 20px 5px rgba(190, 190, 190, 0.10);',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
