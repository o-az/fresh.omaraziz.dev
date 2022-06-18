import { apply, type Configuration, setup, tw } from '$twind';
import * as colors from '$twind/colors';
import twindTypography from '$twind/typography';

export { apply, setup, tw };

export const twindConfig: Configuration = {
  plugins: { ...twindTypography() },
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      serif: ['"IBM Plex Sans"', 'SFMono-Regular'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    colors: {
      blue: colors.blue,
      black: '#12130F',
      gray: colors.gray,
      green: colors.green,
      white: colors.white,
      yellow: colors.yellow,
      transparent: 'transparent',
      darkGreen: '#003e29',
      lightBlue: '#c1dbe3',
      lightGreen: '#467061',
      lightGrey: '#CECECE',
    },
  },
};
