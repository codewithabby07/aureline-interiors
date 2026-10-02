/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#FAF7F0',
          200: '#F2ECE1',
          300: '#E5DDCF',
        },
        stone: {
          50: '#F7F6F4',
          100: '#EFECE6',
          200: '#E2DDD3',
          300: '#CFC7B9',
          400: '#AFA492',
          500: '#8A7E6C',
          600: '#6E6454',
          700: '#524A3D',
          800: '#383229',
          900: '#231F1A',
        },
        charcoal: {
          800: '#2A2825',
          900: '#1C1B19',
          950: '#141312',
        },
        brass: {
          300: '#D5C4A1',
          400: '#BAA375',
          500: '#9C8255',
          600: '#826B43',
          700: '#695533',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'loose-wide': '0.15em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(28, 27, 25, 0.04)',
        'elevated': '0 12px 32px -4px rgba(28, 27, 25, 0.08)',
      }
    },
  },
  plugins: [],
}
