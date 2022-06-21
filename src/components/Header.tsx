/** @jsx h */
import { h } from "preact";
import Toggle from "@/components/Toggle.tsx";
import { tw } from "@tw";

interface HeaderItem {
  name: string;
  path: string;
}

const HEADER_ITEMS: ReadonlyArray<HeaderItem> = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "blog",
    path: "/blog",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "gm",
    path: "/gm",
  },
] as const;

export default function Header() {
  return (
    <div
      class={tw`flex m-1 mt-3 justify-between px-3 sm:px-5 bg-transparent font-mono`}
    >
      <nav
        class={tw
          `flex items-center justify-between w-full relative border-gray-200 dark:border-gray-700 mx-auto bg-opacity-60 sm:px-6 text-lg sm:text-2xl align-bottom`}
      >
        <ul class={tw`space-x-4 sm:space-x-7 flex`}>
          {HEADER_ITEMS.map(({ name, path }) => {
            return (
              <a href={path} key={name}>
                <li
                  class={tw
                    `rounded-lg font-bold text-gray-600 transition-all hover:bg-gray-200 dark:text-gray-200 py-1 dark:hover:text-gray-50 px-2 sm:px-3 sm:w-auto align-bottom hover:cursor-pointer dark:hover:bg-gray-800 border border-transparent dark:hover:border dark:hover:border-gray-700`}
                >
                  {name}
                </li>
              </a>
            );
          })}
        </ul>
        <div
          class={tw
            `text-center sm:text-right sm:pr-5 w-full h-full align-middle sm:pb-2`}
        >
          <Toggle />
        </div>
      </nav>
    </div>
  );
}
