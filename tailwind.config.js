/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#0B0C10',
          dark: '#1F2833',
          light: '#C5C6C7',
          accent: '#66FCF1',
          highlight: '#45A29E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Lemon Milk"', 'sans-serif'],
        lemon: ['"Lemon Milk"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')", // Placeholder star field
      }
    },
  },
  plugins: [],
}