/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'permanent': ['Permanent Marker', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'street-brown': {
          50: '#FAF7F0',
          100: '#F5EFE7',
          200: '#E8D5C4',
          300: '#DBBBA1',
          400: '#C8935F',
          500: '#A0522D',
          600: '#8B4513',
          700: '#734422',
          800: '#5C3317',
          900: '#3E220F',
        },
        'off-white': '#FAF9F6',
        'cream': {
          50: '#FFFEFB',
          100: '#FFFDF7',
          200: '#FDF6E3',
          300: '#FFFDD0',
          400: '#F5F5DC',
          500: '#F0EAD6',
        },
        'street-blue': {
          400: '#5B9BD5',
          500: '#4A90E2',
          600: '#357ABD',
        }
      },
      backgroundImage: {
        'graffiti-texture': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23A0522D\" fill-opacity=\"0.1\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};