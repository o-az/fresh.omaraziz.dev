/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from '$fresh/server.ts';
import manifest from '@/fresh.gen.ts';
import { config } from 'https://deno.land/std@0.144.0/dotenv/mod.ts';
await config({ safe: true });
import 'https://deno.land/std@0.144.0/dotenv/load.ts';

await start(manifest);
