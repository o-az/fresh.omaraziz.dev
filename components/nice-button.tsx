/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import { tw } from "../config/twind.ts";

export function NiceButton() {
  return (
    <div class={tw`relative inline-flex mt-12 group`}>
      <div
        class={tw`absolute duration-1000 transform rotate-180 transitiona-all opacity-70 -inset-1 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1.5 group-hover:duration-200`}
        style={{
          background:
            "linear-gradient(90deg,#44ff9a -.55%,#44b0ff 22.86%,#8b44ff 48.36%,#f64 73.33%,#ebff70 99.34%)",
        }}
      />
      <a
        href="#"
        role="button"
        class={tw`relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-light-900`}
      >
        Nice Button
      </a>
    </div>
  );
}
