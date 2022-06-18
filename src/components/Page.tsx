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
        <title>{props.title || "Omar Aziz"}</title>
        <link rel="stylesheet" href="/index.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="annonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;400;700&family=Inter:wght@200;400;900&family=JetBrains+Mono:wght@200;400;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body class={tw`bg-white dark:bg-[#06020d] text-black dark:text-white`}>
        <Header />
        {props.children}
      </body>
    </html>
  );
}
