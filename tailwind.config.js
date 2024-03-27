/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1320px',
        'print': {
          'max': '100%',
          'padding': '2px',
        }
      }
    },
    extend: {
      colors: {
        primary: '#0891b2',
        'darker-primary': '#0e7490',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      // screens: {
      //   '2xl': '1320px',
      //   'print': {
      //     'raw': 'print',
      //     'max': '100%',
      //   },
      // },
      boxShadow: {
        'port': '0 4px 6px 1px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}