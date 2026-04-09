/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C8A48C',
          light: '#D4B29A',
        },
        cream: '#F4F1EC',
        'near-black': '#0B0B0D',
        cocoa: '#6B4C42',
        wine: '#7A2535',
      },
      boxShadow: {
        gold: '0 0 40px rgba(200, 164, 140, 0.3)',
        'gold-color': '#C8A48C',
        luxury: '0 30px 90px rgba(0,0,0,0.55)',
        'luxury-hover': '0 40px 100px rgba(0,0,0,0.65)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200,164,140,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(200,164,140,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
