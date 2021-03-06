/** @jsx h */
import { h } from "preact";
import { tw } from "../../config/twind.ts";

export function SearchIcon() {
  return (
    <svg
      class={tw
        `absolute right-3 top-[9px] h-5 w-5 text-gray-400 dark:text-gray-300`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}
