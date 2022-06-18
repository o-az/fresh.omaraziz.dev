/** @jsx h */
import { h, PageProps } from "$fresh/runtime.ts";
import Page from "@/components/Page.tsx";

export default function Greet(props: PageProps) {
  return (
    <Page title={props.params.name}>
      <h1>Hello, {props.params.name}!</h1>
    </Page>
  );
}