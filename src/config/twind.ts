import { apply, setup, tw } from '$twind';

import { css } from '$twind/css';
import * as colors from '$twind/colors';
import twindTypography from '$twind/typography';
import { virtualSheet } from '$twind/sheets';
import { type InnerRenderFunction, RenderContext } from '$fresh/server.ts';

import { IS_BROWSER } from '$fresh/runtime.ts';

export const twindTheme = {
  fontFamily: {
    sans: 'Inter, system-ui',
    serif: '"IBM Plex Sans", SFMono-Regular',
    mono: ['JetBrains Mono', 'monospace'],
  },
  extend: {
    spacing: {
      '8xl': '96rem',
      '9xl': '128rem',
      '10xl': '160rem',
      '11xl': '192rem',
      '12xl': '224rem',
      '13xl': '256rem',
      '14xl': '288rem',
      '15xl': '320rem',
    },
  },
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
  setup({
    mode: 'strict',
    plugins: { ...twindTypography({ className: 'prose' }) },
    important: true,
    darkMode: 'class',
    theme: twindTheme,
  });
}
const sheet = virtualSheet();
sheet.reset();
setup({
  sheet,
  theme: twindTheme,
  mode: 'silent',
  plugins: { ...twindTypography({ className: 'prose' }) },
  // important: true,
  darkMode: 'class',

});

export function render(context: RenderContext, render: InnerRenderFunction) {
  const snapshot = context.state.get('twindSnapshot') as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  context.styles.splice(0, context.styles.length, ...(sheet).target);
  const newSnapshot = sheet.reset();
  context.state.set('twindSnapshot', newSnapshot);
}

export { apply, css, setup, tw };
