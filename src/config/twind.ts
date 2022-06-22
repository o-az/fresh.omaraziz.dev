import { apply, type Configuration, setup, tw } from '$twind';

import { css } from '$twind/css';
import * as colors from '$twind/colors';
import twindTypography from '$twind/typography';
import { virtualSheet } from '$twind/sheets';
import { type InnerRenderFunction, RenderContext, start } from '$fresh/server.ts';

import { IS_BROWSER } from '$fresh/runtime.ts';

export const theme = {
  colors: {
    blue: colors.blue,
    black: colors.black,
    gray: colors.gray,
    green: colors.green,
    white: colors.white,
    yellow: colors.yellow,
    transparent: 'transparent',
  },
};
if (IS_BROWSER) {
  setup({ theme: { colors } });
}

export const twindConfig: Configuration = {
  plugins: { ...twindTypography({ className: 'prose' }) },
  important: true,
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

const sheet = virtualSheet();
sheet.reset();
setup({ ...twindConfig, sheet, theme });

export function render(context: RenderContext, render: InnerRenderFunction) {
  const snapshot = context.state.get('twindSnapshot') as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  context.styles.splice(0, context.styles.length, ...sheet.target);
  const newSnapshot = sheet.reset();
  context.state.set('twindSnapshot', newSnapshot);
}

export { apply, css, setup, tw };
