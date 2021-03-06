import { Handlers } from "$fresh/server.ts";

const CSS = /* css */ `
:root {
  color-scheme: light dark;
  --background-dark: #0b0c13;
  --background-light: #fafafa;
  --text-dark: #fafafa;
  --text-light: #0b0c13;
}

* {
  vertical-align: baseline;
  font-size: 100%;
  outline: 0;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  max-width: 100%;
}

::-webkit-scrollbar {
    display: none;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

::selection {
  background-color: rgba(231, 189, 243, 0.913);
  color: #000;
}

html {
  height: 100%;
  max-width: 100%;
}

body {
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  isolation: isolate;
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

main {
  padding: 3rem 1rem;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:hover,
a:focus,
a:active {
  -moz-text-decoration-line: underline;
  -moz-text-decoration-color: #f7f7f7;
  -moz-text-decoration-style: wavy;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

li {
  margin: 0.5rem 0;
}

[hidden] {
  pointer-events: none;
}

* {
  scrollbar-width: thin;
}

*::-webkit-scrollbar {
  background-color: rgb(0 0 0 / 0%);
  height: 12px;
  width: 12px;
}

*::-webkit-scrollbar-corner {
  background-color: rgb(0 0 0 / 0%);
}

.dark *::-webkit-scrollbar-thumb {
  --tw-bg-opacity: 1;
  background-color: rgba(50, 50, 50, var(--tw-bg-opacity));
}

*::-webkit-scrollbar-thumb {
  transition: background 0.2s ease-in-out;
  border: 3px solid rgb(0 0 0 / 0%);
  -webkit-background-clip: content-box;
  background-clip: content-box;
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
  border-radius: 9999px;
}

@supports (scrollbar-gutter: stable) {
  html {
    overflow-y: auto;
    scrollbar-gutter: stable;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-text-fill-color: black !important;
  -webkit-box-shadow: 0 0 0 999px var(--color-gray-100) inset !important;
  box-shadow: 0 0 0 999px var(--color-gray-100) inset !important;
  background-clip: content-box !important;
}

.dark input:-webkit-autofill,
.dark input:-webkit-autofill:hover,
.dark input:-webkit-autofill:focus,
.dark input:-webkit-autofill:active {
  -webkit-text-fill-color: white !important;
  -webkit-box-shadow: 0 0 0 999px var(--color-gray-800) inset !important;
  box-shadow: 0 0 0 999px var(--color-gray-800) inset !important;
  background-clip: content-box !important;
}

input:-webkit-autofill::first-line {
  font-size: 1.125rem;
  font-weight: 500;
  font-family: IBM Plex Sans, sans-serif;
}

[hidden] {
  pointer-events: none;
}

a {
  position: relative;
  transition: all 0.1s;
  text-decoration: none;
  @apply dark:text-blue-400;
}

p {
  @apply dark:text-white;
}

a:before,
a:after {
  transition: all 0.1s;
}

.social:before,
.social:after {
  position: absolute;
  color: transparent;
}

.social:hover::before,
.social:hover::after {
  font-size: 1.2em;
  font-weight: 500;
  color: rgb(243, 189, 211);
}

.social:before {
  content: '\\007B';
  left: -12px;
}

.social:hover::before {
  left: -7px;
}

.social:after {
  content: '\\007D';
  right: -12px;
}

.social:hover::after {
  right: -7px;
}
`;

export const handler: Handlers = {
  GET: () => {
    return new Response(CSS, {
      headers: {
        "content-type": "text/css",
        "cache-control": "public, max-age=31536000, immutable",
      },
    });
  },
};
