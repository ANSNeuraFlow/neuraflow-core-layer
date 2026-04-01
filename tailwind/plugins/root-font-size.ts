import type { PluginCreator } from 'tailwindcss/types/config';

const baseFontSize: PluginCreator = ({ addBase }) => {
  addBase({
    html: {
      fontSize: '62.5%',
    },
  });
};

export default baseFontSize;
