/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f9', 100: '#d6deee', 200: '#aebddc', 300: '#7f95c3',
          400: '#5570a6', 500: '#3a558b', 600: '#2b4270', 700: '#20325a',
          800: '#162443', 900: '#0f1a33', 950: '#0a1124',
        },
        gold: {
          50: '#fbf7ec', 100: '#f5ebcd', 200: '#ebd69c', 300: '#dfbd66',
          400: '#d4a843', 500: '#c4932f', 600: '#a87526', 700: '#875922',
          800: '#704823', 900: '#5f3d21',
        },
        cream: '#faf8f3',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
