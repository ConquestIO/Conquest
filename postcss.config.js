import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
export default {
  plugins: [
    'postcss-preset-env', autoprefixer,
    tailwindcss('./tailwindcss.config.js')
  ],
};