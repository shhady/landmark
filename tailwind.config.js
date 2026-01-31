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
        primary: {
          DEFAULT: '#1c2d44', // Brand Dark Blue
          light: '#2a4365',
          dark: '#0f172a', // Darker navy for better contrast
        },
        secondary: {
          DEFAULT: '#722514', // Brand Deep Red/Brown
          light: '#8f301a',
          dark: '#541b0f',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          800: '#1f2937',
          900: '#111827',
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      fontFamily: {
        sans: ['Heebo', 'Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
