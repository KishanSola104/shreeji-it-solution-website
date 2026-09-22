/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Core action blue
          700: '#1d4ed8', // Core dark blue
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#0f172a', // Deep corporate dark
        },
        corporate: {
          dark: '#0A192F',
          darker: '#07111E',
          card: '#0F223D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      }
    },
  },
  plugins: [],
}
