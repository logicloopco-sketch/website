/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Maroon variations
        maroon: {
          50: 'rgba(128, 0, 0, 0.05)',
          100: 'rgba(128, 0, 0, 0.1)',
          200: 'rgba(128, 0, 0, 0.2)',
          300: 'rgba(128, 0, 0, 0.3)',
          400: '#B33333',
          500: '#A00000',
          600: '#800000',
          700: '#660000',
          800: '#4D0000',
          900: '#330000',
        },
        // Cream variations
        cream: {
          50: '#FFFFF0',
          100: '#FFFDD0',
          200: '#FFF8E1',
          300: '#FAF7E6',
          400: '#F5F2C7',
          500: '#F0EDBE',
          600: '#EBE8B5',
          700: '#E6E3AC',
          800: '#E1DEA3',
          900: '#DCD99A',
        }
      },
      backgroundImage: {
        'maroon-gradient': 'linear-gradient(135deg, #800000 0%, #A00000 100%)',
        'cream-gradient': 'linear-gradient(135deg, #FFFDD0 0%, #FFF8E1 100%)',
        'maroon-cream-gradient': 'linear-gradient(135deg, #800000 0%, #FFFDD0 100%)',
        'cream-maroon-gradient': 'linear-gradient(135deg, #FFFDD0 0%, #800000 100%)',
      }
    },
  },
  plugins: [],
};