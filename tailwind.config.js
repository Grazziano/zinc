/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'light-gray': '#f9f9f9',
      blue: '#6168ff',
      red: '#ff5574',
      'dark-gray': '#5e6576',
      black: '#222222',
      white: '#ffffff',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
