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
        primary: '#0e7490',
        'darker-primary': '#155e75',
        dark: '#1e293b',
        secondary: '#334155',
        'bg-dark': "#164e63",
        'bg-slate': "#ecfeff",
        'bg-darker': "#083344"
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