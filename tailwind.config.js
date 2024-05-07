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
      },
    },
  },
  plugins: [],
}
