/** @jsx h */
import { h } from 'preact';
import { tw } from '../config/twind.ts';

import { SearchIcon } from '../components/icons/search.tsx';

export default function SearchBar({
  text,
  onInputChange,
}: {
  text: string;
  onInputChange: (event: h.JSX.TargetedEvent<HTMLInputElement, Event>) => void;
}) {
  return (
    <div className='relative mb-6 w-full w-full dark:bg-black'>
      <input
        id='search'
        onInput={onInputChange}
        placeholder={text}
        class={tw('dark:bg-gray-800 dark:bg-opacity-40 dark:text-gray-100 dark:placeholder-zinc-400 dark:border-rose-50 dark:border-opacity-20 ring-0 outline-0 focus:outline-none block w-full rounded-md border border-gray-100 bg-gray-100 px-4 py-2 text-gray-800 ring-transparent focus:ring-transparent focus:ring-offset-transparent outline-transparent ring-0 ring-opacity-30 focus:ring-zink-500')}
      />
      <SearchIcon />
    </div>
  );
}
