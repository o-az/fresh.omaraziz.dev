// This module adds twind support.

import { RenderContext, RenderFn } from '$fresh/server.ts';
import { setup, twindConfig } from '@/utilities/twind.ts';
import { virtualSheet } from '$twind/sheets';

const sheet = virtualSheet();
sheet.reset();
setup({ ...twindConfig, sheet });

export function render(context: RenderContext, render: RenderFn) {
  const snapshot = context.state.get('twindSnapshot') as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  context.styles.splice(0, context.styles.length, ...sheet.target);
  const newSnapshot = sheet.reset();
  context.state.set('twindSnapshot', newSnapshot);
}
