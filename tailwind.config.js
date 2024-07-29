/* global require */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // You can add custom theme extensions here if needed
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  // Enable JIT mode for faster compilation
  mode: 'jit',
}

