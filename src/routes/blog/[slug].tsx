/** @jsx h */
/** @jsxFrag Fragment */
import { Head, type PageProps } from '$fresh/runtime.ts';
import { createElement, h, render } from 'preact';
import { Handlers } from '$fresh/server.ts';

import { apply, css, tw } from '@tw';

import Page from '@/components/Page.tsx';
import { dateStringToHuman } from '@/utilities/index.ts';
import type { Article } from '@/types/index.ts';
import { type Frontmatter, getMdxFile, type ParsedContent } from '@/lib/compile-mdx.ts';

type Page = ParsedContent;

interface Data {
  page: Page;
}

export const handler: Handlers<Data> = {
  async GET(request, context) {
    const { slug } = context.params;
    if (slug === '') {
      return new Response('', { status: 307, headers: { location: '/blog' } });
    }
    const { evaluated: { html, frontmatter }, compiled } = await getMdxFile(slug);
    // console.log(html);
    return context.render({ page: { html, frontmatter } });
  },
};

export default function Blog(props: PageProps<Data>) {
  const { page } = props.data;
  const { html, frontmatter: { title, tags, publishedOn, image } } = page;
  return (
    <Page
      links={[
        '/markdown.css',
        // 'https://omaraziz.dev/assets/markdown.21f7c5c7.css',
        // 'https://test-svelte-d1b.pages.dev/_app/immutable/assets/pages/blog/__layout-blog.svelte-dd7d28e9.css',
        // 'https://unpkg.com/@highlightjs/cdn-assets@11.5.1/styles/default.min.css',
        // 'https://unpkg.com/@highlightjs/cdn-assets@11.5.1/styles/tokyo-night-dark.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-atom-dark.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/plugins/unescaped-markup/prism-unescaped-markup.min.css',
        'https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css',
      ].map((href) => ({ href, type: 'text/css', rel: 'stylesheet' }))}
      scripts={[
        ...[
          'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js',
          // 'https://unpkg.com/@highlightjs/cdn-assets@11.5.1/highlight.min.js',
        ].map((src) => ({ src })),
      ]}
      bodyScripts={[
        // 'https://unpkg.com/@highlightjs/cdn-assets@11.5.1/highlight.min.js',
        'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/plugins/line-numbers/prism-line-numbers.min.js',
        'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/plugins/highlight-keywords/prism-highlight-keywords.min.js',
      ].map((src) => ({ src }))}
    >
      <main
        class={tw
          `flex flex-col mx-auto px-6 justify-center sm:w-full sm:px-8 max-w-4xl dark:text-gray-200 mb-8 antialiased w-full overflow-hidden sm:p-6`}
      >
        <h1
          class={tw`w-full pb-5 sm:pb-8 -mb-2 text-4xl font-bold  sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`}
        >
          {title}
        </h1>
        <div
          class={tw
            `flex my-4 text-sm mb-4 w-full text-gray-600 items-start justify-between subpixel-antialiased md:items-center md:flex-row dark:text-gray-200 px-3`}
        >
          <p class={tw`w-full text-left`}>
            Omar Aziz /
            {dateStringToHuman(publishedOn)}
          </p>
          <p class={tw`text-center w-full text-right md:mt-0 max-h-min`}>
          </p>
        </div>
        <ul class={tw`text-center sm:text-left`}>
          {tags?.map((tag) => (
            <li
              class={tw
                `rounded-sm font-semibold bg-gray-200 text-sm mr-2 py-1 px-2 text-gray-700 inline-block dark:text-gray-300 dark:bg-gray-800 hover:text-white hover:font-bold hover:bg-gray-400 hover:cursor-text max-h-7`}
            >
              <p class={tw`focus:outline-none hover:cursor-text`}>{tag}</p>
            </li>
          ))}
        </ul>
        <article
          id='article'
          class={tw
            `flex flex-col h-full min-w-full mb-16 items-start justify-center prose prose-img:rounded-xl prose-img:border-b-2 prose-a:text-blue-300 dark:prose-invert dark:text-gray-700 truncate max-w-full prose-p:text-white text-white dark:test-white`}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        <div class='giscus'></div>
      </main>
    </Page>
  );
}
