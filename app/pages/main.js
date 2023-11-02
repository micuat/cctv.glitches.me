import html from "choo/html";

// export module
export default function(state, emit) {

  return html`
  <div>
    <button onclick="${ open }">open</button>
  </div>
  `;

  function open(ev) {
    const w = window.open("/#camera", `target-${ state.windowCount }`, "left=100,top=100,width=760,height=720");
    state.windowCount++;
  }
}
