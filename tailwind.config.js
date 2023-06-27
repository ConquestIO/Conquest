export default {
  content: ['./dist/**/*.{html,js}', './src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
      },
      screens: {
        '3xl': '2000px',
        wrap: '1461px',
      },
      backgroundImage: {
        'bg1': "url('./assets/bg1.jpg')",
        'bg2': "url('./assets/bg2.jpg')"
      }
    },
  },
  plugins: [],
};
