/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, useState } from "$fresh/runtime.ts";
import { emojis } from "@/data/emojis.ts";
import { randomArrayElement } from "@/utilities/index.ts";
import { tw } from "@tw";

// const buttonText = randomEmoji();

function toggleTheme(nextTheme: "light" | "dark") {
  const htmlTag = document.querySelector<HTMLHtmlElement>(
    "html",
  ) as unknown as HTMLHtmlElement;
  htmlTag.setAttribute("class", nextTheme);
}

export default function Toggle(props: {
  theme?: "light" | "dark";
}) {
  const emojisList = emojis;
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [text, setText] = useState(randomArrayElement([...emojisList]));

  const switchTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    toggleTheme(nextTheme);
    setText(randomArrayElement([...emojisList]));
  }
  return (
    <Fragment>
      <button
        aria-label="Toggle Dark Mode"
        class={tw
          `text-3xl pt-2 sm:pt-3 hover:scale-150 hover:transition hover:transform hover:duration-150 hover:ease-in-out outline-none border-none focus:outline-none`}
        onClick={switchTheme}
      >
        {text}
      </button>
    </Fragment>
  );
}
