/** @jsx h */
import { ComponentChildren, h, Head } from "$fresh/runtime.ts";
import Header from "@/components/Header.tsx";
import { tw } from "@tw";

export default function Page(props: {
  title?: string;
  children: ComponentChildren;
}) {
  return (
    <html class="dark">
      <Head>
        <link rel="stylesheet" href="/index.css" />
        <title>{props.title || "Omar Aziz"}</title>
      </Head>
      <body class={tw`bg-white dark:bg-[#06020d] text-black dark:text-white`}>
        <Header />
        {props.children}
      </body>
    </html>
  );
}
