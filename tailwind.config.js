/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '100':"36rem"

      },
      width:{
        '100':"28rem"
      }
    },
  },
  plugins: [],
}

