#!/usr/bin/env -S deno run -A --watch=./src/routes,src/islands,src/components,src/utilities,src/lib,src/data --allow-read ./src/dev.ts

import dev from '$fresh/dev.ts';
import '@/config/index.ts';

await dev(import.meta.url, './main.ts');
