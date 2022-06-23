/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import Page from '@/components/Page.tsx';
import { tw } from '@tw';
interface LinkItem {
  name: string;
  path: string;
}

export const LINKS: ReadonlyArray<LinkItem> = [
  {
    name: 'GitHub',
    path: 'https://github.com/o-az',
  },
  {
    name: 'Twitter',
    path: 'https://twitter.com/undeterrable',
  },
  {
    name: 'Email',
    path: 'mailto:me@omaraziz.dev',
  },
] as const;

export default function Home() {
  return (
    <>
      <Page title='✨'>
        <main
          class={tw
            `sm:mt-16 relative grid grid-flow-col items-center text-center text-white max-h-full mx-auto`}
        >
          <section
            class={tw
              `grid lg:grid-flow-col items-center text-center text-white grid items-center mx-1 sm:mx-24 space-y-6 justify-center lg:space-x-12`}
          >
            <p
              class={tw
                `text-black dark:text-[#f7f7f7] tracking-tighter font-extrabold text-center font-sans text-8xl sm:text-9xl px-6 mx-auto justify-center`}
            >
              Omar Aziz
            </p>
            <ul
              class={tw`flex text-xl md:text-4xl justify-center`}
            >
              {LINKS.map(({ name, path }, index) => {
                return (
                  <li>
                    <a
                      id={`${index}-social-link`}
                      href={path}
                      target='_blank'
                      rel='noreferrer'
                      class={tw([
                        `mx-3 p-1 text-[26px] font-bold text-gray-600 dark:text-gray-400 hover:dark:text-gray-100 text-gray-600 hover:text-black sm:px-3 sm:py-1 subpixel-antialiased tracking-wide`,
                        'social',
                      ])}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </main>
      </Page>
    </>
  );
}
