/** @jsx h */
import { h } from 'preact';
import Page from '@/components/Page.tsx';
import { tw } from '@tw';
import { type PageProps } from '$fresh/server.ts';

export default function FourOFour(props: PageProps) {
  return (
    <Page title='404'>
      <main class={tw`m-6 mt-20 mx-auto text-center w-full`}>
        <h2
          class={tw
            `text-9xl sm:text-12xl font-bold text-gray-900 dark:text-gray-100 font-extrabold`}
        >
          404
        </h2>
        <p class={tw`text-2xl text-gray-700 dark:text-gray-400`}>
          The page you are looking for does not exist.
        </p>
      </main>
    </Page>
  );
}
