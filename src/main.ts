/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import manifest from '@/fresh.gen.ts';
import { type InnerRenderFunction, RenderContext, start } from '$fresh/server.ts';
import '@/config/dotenv.ts';
import { setup } from '$twind';
import { theme, twindConfig } from '@tw';
import { virtualSheet } from '$twind/sheets';

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

await start(manifest, { ...render });
