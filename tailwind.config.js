/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#0f0f1a',
        accentViolet: '#8b5cf6',
        accentPink: '#ec4899',
        accentBlue: '#3b82f6',
        accentGreen: '#10b981',
        cardGlass: 'rgba(255, 255, 255, 0.05)',
        surface: '#181824',
        accentVioletHover: '#7c3aed', 
        borderMuted: 'rgba(255, 255, 255, 0.1)',
        textSecondary: '#d1d5db',
          successBg: '#16a34a',
        successBorder: '#4ade80',
        errorBg: '#dc2626',
        errorBorder: '#f87171',  
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

