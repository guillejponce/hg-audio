/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60A5FA', // Light blue
        secondary: 'rgba(103, 232, 249, 0.85)', // Opac cyan
        accent: '#FDFBF7', // Cream white
        'primary-dark': '#3B82F6', // Darker shade of light blue
        'secondary-dark': 'rgba(34, 211, 238, 0.9)', // Darker shade of cyan
        'accent-dark': '#F5F1E6', // Darker shade of cream
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 10px rgba(96, 165, 250, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(96, 165, 250, 0.8)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #60A5FA, #3B82F6)',
        'gradient-dark': 'linear-gradient(135deg, rgba(103, 232, 249, 0.85), rgba(34, 211, 238, 0.9))',
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
} 