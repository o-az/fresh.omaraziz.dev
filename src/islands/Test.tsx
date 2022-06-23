/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';

export default function TestButton() {
  return (
    <Fragment>
      <button onClick={(event) => console.log(event)}>
        TEST BUTTON
      </button>
    </Fragment>
  );
}
