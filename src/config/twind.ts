import { apply, type Configuration, setup, tw } from '$twind';

import { css } from '$twind/css';
import * as colors from '$twind/colors';
import twindTypography from '$twind/typography';

import { IS_BROWSER } from "$fresh/runtime.ts";

export const theme = {
  colors: {
    blue: colors.blue,
    black: colors.black,
    gray: colors.gray,
    green: colors.green,
    white: colors.white,
    yellow: colors.yellow,
    transparent: "transparent",
  },
};
if (IS_BROWSER) {
  setup({ theme: { colors } });
}

export const twindConfig: Configuration = {
  plugins: { ...twindTypography({ className: 'prose' }) },
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      serif: ['"IBM Plex Sans"', 'SFMono-Regular'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    colors: { ...colors },
  },
};

export { apply, css, setup, tw };
