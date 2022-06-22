/** @jsx h */
import { h } from "preact";
import Page from "@/components/Page.tsx";
import { tw } from "@tw";

interface LinkItem {
  name: string;
  path: string;
}

export const LINKS: ReadonlyArray<LinkItem> = [
  {
    name: "GitHub",
    path: "https://github.com/o-az",
  },
  {
    name: "Twitter",
    path: "https://twitter.com/undeterrable",
  },
  {
    name: "Email",
    path: "mailto:me@omaraziz.dev",
  },
] as const;

export default function Home() {
  return (
    <Page title="✨">
      <main
        class={tw
          `mt-32 sm:mt-50 relative grid grid-flow-col items-center text-center text-white h-full mx-auto`}
      >
        <section
          class={tw
            `mt-30 sm:mt-50 relative grid lg:grid-flow-col items-center text-center text-white h-full grid items-center mx-1 sm:mx-30 space-y-6`}
        >
          <p
            class={tw
              `text-black dark:text-[#f7f7f7] tracking-tighter font-extrabold text-center inter-bold aspect-w-1 text-9xl px-6`}
          >
            Omar Aziz
          </p>
          <div class={tw`flex justify-center text-xl md:text-4xl`}>
            {LINKS.map(({ name, path }, index) => {
              return (
                <a
                  id={`${index}-social-link`}
                  href={path}
                  target="_blank"
                  rel="noreferrer"
                  class={tw
                    `social mx-3 p-1 text-[26px] font-bold text-gray-600 dark:text-gray-400 hover:dark:text-gray-100 text-gray-600 hover:text-black sm:px-3 sm:py-1 md:inline-block subpixel-antialiased tracking-wide`}
                >
                  {name}
                </a>
              );
            })}
          </div>
        </section>
      </main>
    </Page>
  );
}
