// deno-lint-ignore-file no-fallthrough
import { env } from '@/config/index.ts';
const enum LOG_TYPE {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  DEBUG = 'debug',
  LOG = 'log',
}

export function devLogger(
  args: unknown[] | unknown,
  errorType: 'error' | 'warn' | 'info' | 'debug' | 'log' = LOG_TYPE.LOG,
) {
  if (env.environment !== 'development') return;
  console.log(
    `%c file path: ${import.meta.url}`,
    'background:#0ea5e9; color:white; padding: 1px 4px; border-radius: 3px;',
  );
  switch (errorType) {
    case LOG_TYPE.INFO:
      console.info(JSON.stringify(args, null, 2));
    case LOG_TYPE.WARN:
      console.warn(JSON.stringify(args, null, 2));

    case LOG_TYPE.ERROR:
      console.error(JSON.stringify(args, null, 2));

    case LOG_TYPE.DEBUG:
      console.debug(JSON.stringify(args, null, 2));
    default:
      console.log(JSON.stringify(args, null, 2));
  }
}
