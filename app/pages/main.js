import html from "choo/html";
import { css } from "@emotion/css";

const mainCss = css`
`;

// export module
export default function(state, emit) {

  return html`
  <div class="${ mainCss }">
    <button onclick="${ open }">open</button>
  </div>
  `;

  function open(ev) {
    window.open("/#camera", `target-${ state.windowCount }`, "left=100,top=100,width=840,height=720");
    state.windowCount++;
  }
}
