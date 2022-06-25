import { HandlerContext } from '$fresh/server.ts';

export const handler = (request: Request, context: HandlerContext): Response => {
  return new Response('pong', { status: 200 });
};
