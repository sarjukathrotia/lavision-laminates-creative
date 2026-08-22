/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F0',
        sand: '#EADFCB',
        ink: '#2A2724',
        pink: {
          DEFAULT: '#E6329B',
          accent: '#E6329B',
        },
        pinkP: '#FBD9EC',
        sky: {
          DEFAULT: '#1FA9E0',
          accent: '#1FA9E0',
        },
        skyP: '#D6EEF9',
        lime: {
          DEFAULT: '#9FB524',
          accent: '#9FB524',
        },
        limeP: '#ECF2C6',
        peachP: '#FBE0D2',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['"General Sans"', 'sans-serif'],
        handwritten: ['"Shantell Sans"', 'cursive'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'blob-alt': '30% 70% 70% 30% / 50% 60% 40% 50%',
        'arch': '120px 120px 24px 24px',
        'arch-sm': '80px 80px 16px 16px',
        'arch-lg': '200px 200px 32px 32px',
      },
      boxShadow: {
        'glow-pink': '0 0 30px -5px rgba(230, 50, 155, 0.25)',
        'glow-sky': '0 0 30px -5px rgba(31, 169, 224, 0.25)',
        'glow-lime': '0 0 30px -5px rgba(159, 181, 36, 0.25)',
        'glass': '0 8px 32px 0 rgba(42, 39, 36, 0.06)',
      },
      keyframes: {
        'blob-float': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(15px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-10px, 15px) scale(0.95)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
        'beam': {
          '100%': { 'offset-distance': '100%' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'blob-float': 'blob-float 10s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}
