/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          600: '#0F766E',
          700: '#0D9488',
        },
        blue: {
          700: '#1E40AF',
          800: '#1E3A8A',
        },
        amber: {
          500: '#F59E0B',
        },
        neutral: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          800: '#292524',
          900: '#1C1917',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
