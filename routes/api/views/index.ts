import { Handlers } from "$fresh/server.ts";

const baseURL = "https://omaraziz.dev/api/views";

interface Views {
  slug: string;
  views: string | number;
}

interface ExternalResponse {
  data: {
    total: number | null;
    views: ReadonlyArray<Views>;
  };
  error: null | string;
}

export const handler: Handlers = {
  async GET() {
    const externalRequest = await fetch(baseURL);
    if (externalRequest.status !== 200) {
      return new Response("", { status: 404 });
    }

    const externalResponse: ExternalResponse = await externalRequest.json();
    const { data, error: externalError } = externalResponse;

    if (externalError) return new Response("", { status: 404 });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });
  },
};
