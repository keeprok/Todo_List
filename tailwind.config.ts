import { colors } from '@/styles/color';
import { fontFamily } from '@/styles/fonts';

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
};
