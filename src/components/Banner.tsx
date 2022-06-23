/** @jsx h */
import { h } from 'preact';
import { tw } from '@tw';

export default function Banner(props: { text: string }) {
  if (Deno.env.get('ENVIRONMENT') === 'development') return null;

  return (
    <div
      class={tw
        `w-full text-center pt-2 bg-[rgb(255,252,183)] !text-[#000] font-extrabold text-3xl tracking-tighter`}
    >
      <p class={tw`color-black`}>{props.text}</p>
    </div>
  );
}
