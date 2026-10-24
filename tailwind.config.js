/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF1E7',
        'soft-pink': '#FFD7DF',
        'blush-pink': '#F6AFC4',
        lavender: '#D7B8F8',
        'lavender-light': '#E9DCFB',
        raspberry: '#D91F55',
        'deep-plum': '#38213D',
        'paper-white': '#FFFDF8',
        'pastel-mint': '#C5F0E3',
        'pastel-yellow': '#FFEAA7',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'Playfair Display', 'serif'],
        handwriting: ['Caveat', 'Patrick Hand', 'cursive'],
        sans: ['Nunito', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'raspberry-glow': '0 8px 30px -4px rgba(217, 31, 85, 0.45), 0 4px 12px -2px rgba(217, 31, 85, 0.3)',
        'soft-card': '0 10px 40px -10px rgba(56, 33, 61, 0.08), 0 2px 10px -2px rgba(56, 33, 61, 0.04)',
        'envelope': '0 15px 35px -5px rgba(217, 31, 85, 0.18), 0 5px 15px -3px rgba(56, 33, 61, 0.1)',
        'photo-booth': '0 20px 50px -10px rgba(100, 50, 150, 0.25)',
      },
      animation: {
        'cake-rotate': 'cakeRotate 12s linear infinite',
        'cake-float': 'cakeFloat 4s ease-in-out infinite',
        'flame-flicker': 'flameFlicker 0.6s ease-in-out infinite alternate',
        'float-gentle': 'floatGentle 5s ease-in-out infinite',
        'sparkle-twinkle': 'sparkleTwinkle 2.5s ease-in-out infinite',
        'bulb-blink': 'bulbBlink 1s ease-in-out infinite alternate',
        'camera-shake': 'cameraShake 0.4s ease-in-out',
      },
      keyframes: {
        cakeRotate: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        cakeFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        flameFlicker: {
          '0%': { transform: 'scale(1) skewX(0deg)', opacity: '0.9' },
          '100%': { transform: 'scale(1.15, 0.95) skewX(3deg)', opacity: '1' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        sparkleTwinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        bulbBlink: {
          '0%': { opacity: '0.4', filter: 'brightness(0.8)' },
          '100%': { opacity: '1', filter: 'brightness(1.3)' },
        },
        cameraShake: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '20%': { transform: 'translate(-4px, 3px) rotate(-1deg)' },
          '40%': { transform: 'translate(4px, -3px) rotate(1deg)' },
          '60%': { transform: 'translate(-3px, -2px) rotate(-0.5deg)' },
          '80%': { transform: 'translate(3px, 2px) rotate(0.5deg)' },
        }
      }
    },
  },
  plugins: [],
}
