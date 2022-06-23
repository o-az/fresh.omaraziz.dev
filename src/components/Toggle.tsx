/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import { emojis } from '@/data/emojis.ts';
import { randomArrayElement } from '@/utilities/index.ts';
import { tw } from '@tw';

function toggleTheme(nextTheme: 'light' | 'dark') {
  const htmlTag = document.querySelector<HTMLHtmlElement>(
    'html',
  ) as unknown as HTMLHtmlElement;
  htmlTag.setAttribute('class', nextTheme);
}

export default function Toggle() {
  const emojisList = emojis;
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [text, setText] = useState(randomArrayElement([...emojisList]));

  const switchTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    toggleTheme(nextTheme);
    console.log('theme', theme);
    setText(randomArrayElement([...emojisList]));
  };

  return (
    <Fragment>
      <button
        for='checkbox'
        aria-label='Toggle Dark Mode'
        class={tw
          `border-2 border-red-500 h-full text-3xl pt-2 sm:pt-3 hover:scale-150 hover:transition hover:transform hover:duration-150 hover:ease-in-out outline-none border-none focus:outline-none cursor-pointer touch-manipulation`}
        onClick={switchTheme}
      >
        {text}
      </button>
    </Fragment>
  );
}
