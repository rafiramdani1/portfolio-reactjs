/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      url: ['Poppins']
    },
    extend: {
      colors: {
        textPrimary: '#3f3f46',
        hoverTextPrimary: '#1f2937'
      },
      zIndex: {
        fixedHeader: 50
      },
      backgroundImage: {
        "profile": "url(assets/profile.jpg)"
      }
    }
  },
  plugins: [],
}

