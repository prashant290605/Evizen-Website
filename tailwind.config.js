/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-medium': 'spin 2s linear infinite',
        'spin-fast': 'spin 1.5s linear infinite',
        'revolve': 'revolve 2s ease-in-out infinite',
        'fade-in-out': 'fadeInOut 2s ease-in-out infinite',
      },
      keyframes: {
        revolve: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
          '50%': { transform: 'rotate(180deg) scale(1.1)', opacity: '0.8' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
