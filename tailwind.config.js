/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '2rem',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        darkPurple: '#262044',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        mainPurple: {
          100: '#ddd6ff',
          200: '#cac9f3',
          300: '#7D41E1',
        },
        mainPink: {
          100: '#fc5d9d',
        },
        lightPink: '#ffe0f7',
        mainBlue: {
          100: '#2DAAFC',
        },
        cardBg: '#0F141A',
        white: '#FFFFFF',
        placeholderColor: '#b3b3b1',
      },
      lineHeight: {
        hero: '4.5rem',
      },
      backgroundImage: {
        heroMain: "url('../public/images/heromain.png')",
        heroSecond: "url('../public/images/herosecond.png')",
      },
    },
  },
  variants: {},
  plugins: [],
}
