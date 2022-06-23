/** @jsx h */
import { h } from 'preact';
import Page from '@/components/Page.tsx';
import { tw } from '@tw';

export default function Projects() {
  return (
    <Page title='✨'>
      <main
        class={tw
          `mt-32 sm:mt-50 relative grid grid-flow-col items-center text-center text-white h-full mx-auto`}
      >
        Projects - WIP
      </main>
    </Page>
  );
}
