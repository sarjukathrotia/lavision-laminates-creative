/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury "Atelier" Palette (Near-Monochrome)
        paper: '#F4F1EA',
        alabaster: '#FBFAF7',
        ink: '#16130F',
        graphite: '#6B655C',
        line: 'rgba(22, 19, 15, 0.14)',
        noir: '#0E0C0A',
        // Sand & subtle neutrals
        sand: '#EADFCB',
        cream: '#F4F1EA', // Aliased to paper
        // Accent (only for logo & rare single punctuation)
        pink: '#E6329B',
        sky: '#1FA9E0',
        lime: '#9FB524',
      },
      fontFamily: {
        display: ['Zodiak', 'Didot', 'Bodoni MT', 'serif'],
        serif: ['Zodiak', 'Didot', 'Bodoni MT', 'serif'],
        body: ['"General Sans"', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '2px',
        md: '4px',
        lg: '8px',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(22, 19, 15, 0.04)',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
      }
    },
  },
  plugins: [],
}
