/** @jsx h */
/** @jsxFrag Fragment */
import { type PageProps } from '$fresh/server.ts';
import { h } from 'preact';
import { Handlers } from '$fresh/server.ts';
import { tw } from '@tw';

import Page from '@/components/Page.tsx';
import { dateStringToHuman } from '@/utilities/index.ts';
import { getMdxFile } from '@/lib/compile-mdx.ts';
import type { ParsedContent } from '@/types/index.ts';

type Page = ParsedContent;

export const handler: Handlers<Page> = {
  async GET(_, context) {
    const { slug } = context.params;
    if (!slug) return new Response('', { status: 307, headers: { location: '/blog' } });
    const { html, frontmatter } = await getMdxFile(slug);
    return context.render({ html, frontmatter });
  },
};

export default function Blog(props: PageProps<Page>) {
  const { html, frontmatter } = props.data;
  const { title, tags, publishedOn, image } = frontmatter;
  return (
    <Page
      stylesheets={[
        '/markdown.css',
        'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-atom-dark.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/plugins/unescaped-markup/prism-unescaped-markup.min.css',
        'https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css',
      ]}
      scripts={[
        'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js',
        'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/plugins/line-numbers/prism-line-numbers.min.js',
        'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/plugins/highlight-keywords/prism-highlight-keywords.min.js',
      ]}
    >
      <main
        class={tw
          `flex flex-col mx-auto px-6 justify-center sm:w-full sm:px-8 max-w-5xl dark:text-gray-200 mb-8 antialiased w-full overflow-hidden sm:p-6`}
      >
        <h1
          data-article-title
          class={tw`w-full pb-5 sm:pb-5 -mb-2 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`}
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
          {
            /* <p class={tw`text-center w-full text-right md:mt-0 max-h-min`}>
          </p> */
          }
        </div>
        <ul class={tw`text-center sm:text-left`}>
          {tags?.map((tag) => (
            <li
              class={tw
                `rounded-sm font-semibold bg-gray-200 text-sm mr-2 pb-1 px-1 text-gray-700 inline-block dark:text-gray-300 dark:bg-gray-800 hover:text-white hover:font-bold hover:bg-gray-400 hover:cursor-text max-h-7`}
            >
              <p class={tw`focus:outline-none hover:cursor-text`}>{tag}</p>
            </li>
          ))}
        </ul>
        <article
          id='article'
          data-article-content
          class={tw
            `flex flex-col h-full min-w-full mb-16 items-start justify-center prose prose-img:rounded-xl prose-img:border-b-2 prose-a:text-blue-300 dark:prose-invert dark:text-gray-700 truncate max-w-full prose-p:text-white text-white dark:test-white`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <script
          data-name='github-comments'
          src='https://giscus.app/client.js'
          data-repo='o-az/omaraziz.dev'
          data-repo-id='R_kgDOHUnWOw'
          data-category='General'
          data-category-id='DIC_kwDOHUnWO84CPZZM'
          data-mapping='title'
          data-reactions-enabled='1'
          data-input-position='top'
          data-theme='dark'
          data-lang='en'
          data-loading='lazy'
          crossOrigin='anonymous'
          async
        >
        </script>
      </main>
    </Page>
  );
}
