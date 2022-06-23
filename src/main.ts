/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from '$fresh/server.ts';
import '@/config/dotenv.ts';
import { render } from '@/config/twind.ts';

import routes from './fresh.gen.ts';

console.log('🚀  Starting fresh...');

await start(routes, { render });
