/** @jsx h */
import { h } from 'preact';
import { type PageProps } from '$fresh/server.ts';
import { useState } from 'preact/hooks';
import { tw } from '@tw';

import Page from '@/components/Page.tsx';
import { SearchBar } from '@/components/search-bar.tsx';
import type { Article } from '@/types/index.ts';
import articles from '@/data/articles/articles.json' assert { type: 'json' };

function filterArticles(
  { text, articles }: { text: string; articles: Article[] },
) {
  return articles.filter(({ title }) =>
    text.length && title.toLowerCase().includes(text.toLowerCase())
  );
}

export default function Blog(props: PageProps) {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);

  function searchFiltering(
    event: h.JSX.TargetedEvent<HTMLInputElement, Event>,
  ) {
    const { value: text } = event.currentTarget as HTMLInputElement;
    const filtered = filterArticles({ text, articles: articles });
    setFilteredArticles(filtered);
  }
  return (
    <Page title={props.params.name}>
      <main
        class={tw`flex sm:m-3 mt-25 justify-center dark:text-white min-w-full`}
      >
        <div class={tw`max-w-xl w-full mx-auto`}>
          <h1
            class={tw
              `font-extrabold min-w-full text-center text-black mb-7 tracking-wide col-span-4 row-span-1 dark:text-white aspect-w-1 text-7xl`}
          >
            Articles
          </h1>

          <SearchBar
            onInputChange={searchFiltering}
            text='Search articles'
          />
          <ul class={tw`min-w-full max-w-xl space-y-7 mt-4`} id='articles'>
            {filteredArticles.map(
              ({ title, description, publishedOn, filename, tags }) => {
                return (
                  <li
                    class={tw
                      `rounded-md flex flex-col m-auto space-y-2 border-1 border-gray-600 p-3 text-gray-800 dark:text-gray-200 hover:cursor-pointer hover:bg-zinc-900 hover:border-gray-700 hover:text-light-900 hoverbg-light-900 hoverborder-gray-100 dark:hover:bg-zinc-900`}
                  >
                    <a href={`/blog/${filename}`} onMouseMove={(event) => console.log(event)}>
                      <h1
                        class={tw`font-semibold text-xl tracking-wide dark:text-light-50`}
                      >
                        {title}
                      </h1>
                      <p
                        class={tw`break-words overflow-ellipsis antialiased dark:text-gray-200`}
                      >
                        {description}
                      </p>
                    </a>
                  </li>
                );
              },
            )}
          </ul>
        </div>
      </main>
    </Page>
  );
}
