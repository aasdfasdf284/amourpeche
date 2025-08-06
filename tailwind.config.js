/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'peach': {
          50: '#fef7f0',
          100: '#fdeee1',
          200: '#fbdcc8',
          300: '#f8c4a4',
          400: '#f4a073',
          500: '#ef7e4a',
          600: '#e06428',
          700: '#c24f1a',
          800: '#a04317',
          900: '#7d3816',
        },
        'cream': {
          50: '#fdfbf7',
          100: '#faf6f0',
          200: '#f5eee0',
          300: '#ede1c9',
          400: '#e3cfa8',
          500: '#d6b885',
          600: '#c6a065',
          700: '#ae8851',
          800: '#8b6f44',
          900: '#715b39',
        }
      },
      fontFamily: {
        'serif': ['Noto Serif JP', 'serif'],
        'sans': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}