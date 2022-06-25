/** @jsx h */
import { h } from 'preact';
import { type PageProps } from '$fresh/server.ts';
import Page from '../../components/Page.tsx';
import { tw } from '../../config/twind.ts';

import ArticleList from '../../islands/ArticlesList.tsx';

export default function Blog(props: PageProps) {

  return (
    <Page title={props.params.name}>
      <main
        class={tw`flex sm:m-3 mt-25 justify-center dark:text-white min-w-full`}
      >
        <ArticleList />
      </main>
    </Page>
  );
}
