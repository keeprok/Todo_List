import { colors } from '@/styles/color';

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: { sans: ['NanumSquare', 'sans-serif'] },
    },
  },
  plugins: [],
};
