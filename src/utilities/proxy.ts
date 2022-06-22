// import { serve } from 'deno-http';

// async function handler(req: Request): Promise<Response> {
//   const url = new URL(req.url);
//   url.protocol = 'https:';
//   url.hostname = 'example.com';
//   url.port = '443';
//   return await fetch(url.href, {
//     headers: req.headers,
//     method: req.method,
//     body: req.body,
//   });
// }
