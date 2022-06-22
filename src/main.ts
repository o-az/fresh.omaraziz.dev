/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import manifest from '@/fresh.gen.ts';
import { start } from '$fresh/server.ts';
import '@/config/dotenv.ts';
import { render } from '@/config/twind.ts';

await start(manifest, { ...render });
