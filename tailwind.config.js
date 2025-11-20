
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'velocity-primary': '#EF4444', // A vibrant red for fitness theme
        'velocity-secondary': '#F97316', // An orange accent
        'velocity-dark': '#1F2937', // Dark gray for backgrounds
        'velocity-light': '#F3F4F6', // Light gray for text/elements
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
