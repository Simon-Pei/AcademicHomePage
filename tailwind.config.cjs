/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f4f7f6',
        ink: '#172526',
        muted: '#607071',
        line: '#dce5e2',
        brand: {
          50: '#eef8f6',
          100: '#d9efeb',
          200: '#b9dfd8',
          300: '#88c8bd',
          400: '#4ea99f',
          500: '#218c83',
          600: '#14756e',
          700: '#115f5a',
          800: '#114c49',
          900: '#123f3d',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        mono: [
          '"SFMono-Regular"',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
      },
      boxShadow: {
        soft: '0 12px 34px rgba(30, 55, 53, 0.08)',
      },
    },
  },
  plugins: [],
};
