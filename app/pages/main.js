import html from "choo/html";
import { css } from "@emotion/css";

const mainCss = css`
h1 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
div {
  margin: 0.95rem 0;
}
button {
  position: absolute;
  bottom: 0;
  right: 0;
}
`;

// export module
export default function(state, emit) {

  return html`
  <div class=${ mainCss }>
    <h1>cctv.glitches.me</h1>
    <div>
    </div>
    <div>
      Guard will be back momentarily.
    </div>
    <div>
      Meanwhile, you can follow me on https://dawatcher.tumblr.com
    </div>
    <button onclick="${ open }">open</button>
  </div>
  `;

  function open(ev) {
    const w = window.open("/#camera", `target-${ state.windowCount }`, "left=100,top=100,width=760,height=720");
    state.windowCount++;
  }
}
