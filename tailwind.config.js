/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-100': '#2AB3B1',
        'grey-100': '#9AA7BE',
        'green-100': '#C0DF33',
      },
    },
  },
  plugins: [],
}

