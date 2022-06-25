/** @jsx h */
import { h } from 'preact';
import { tw } from '../config/twind.ts';

export default function Banner(props: { text: string }) {
  if (Deno.env.get('ENVIRONMENT') === 'development') return null;

  return (
    <div
      style={{
        // color: 'black !important',
      }}
      class={tw
        `w-full text-center pt-2 bg-[rgb(255,252,183)] !text-[#000] font-extrabold text-3xl tracking-tighter`}
    >
      <label class={tw`!color-black`}>{props.text}</label>
    </div>
  );
}
