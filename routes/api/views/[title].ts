import { Handlers } from '$fresh/server.ts';

const baseURL = 'https://omaraziz.dev/api/views';

interface ExternalResponse {
  data: { slug: string; views: number };
  error: null | string;
}

export const handler: Handlers = {
  async GET(_, context) {
    console.log(JSON.stringify(
      {
        api: 'api/views/[title].ts',
      },
      null,
      2,
    ));
    const { title } = context.params as { title: string };

    const externalRequest = await fetch(`${baseURL}/${title}`);
    if (externalRequest.status !== 200) return new Response('', { status: 404 });

    const externalResponse: ExternalResponse = await externalRequest.json();
    const { data: { views }, error: externalError } = externalResponse;

    if (externalError) return new Response('', { status: 404 });

    return new Response(`${views}`, {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=UTF-8' },
    });
  },
};
