import html from "choo/html";
import { css } from "@emotion/css";

import menu from "./views/menu.js";
import dialog from "./views/dialog.js";

const mainCss = css`
width: 100%;
.container {
  width: 100%;
  padding-top: 1.5em;
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
}
.dialog {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
.columns {
  display: flex;
  width: 100%;
  max-width: 768px;
}
.hide {
  display: none;
}
.pointer {
  cursor: pointer;
}
.video-container {
  position: relative;
  width: 320px;
  height: 320px;
  overflow: hidden;
}
video {
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  transform: translate(-50%,0) scale(1.25);
}
`;

// export module
export default function(state, emit) {
  let content = "loading";
  if (state.currentData !== undefined) {
    content = doc(state, emit);
  }
  return html`
    <div class=${ mainCss }>
      <div class="container">
        <div id="dialogback" class="dialog ${ state.dialog ? "" : "hide" }" onclick="${ dialogBgClick }">
          ${ dialog(state, emit) }
        </div>
        ${ state.playback.map(e => html`
          <div class="video-container">
            <video id="video-${e.id}" autoplay onended=${ended.bind(e)} muted playsinline>
              <source src="/videos-converted/${e.url}" type="video/mp4" />
            </video>
          </div>
        `) }
      </div>
    </>
  `;
  function ended(ev) {
    this.id = Math.floor(Math.random() * state.videos.length);
    this.url = state.videos[this.id];

    ev.target.src = "/videos-converted/" + this.url;
    // ev.target.querySelector("source").load();
    // ev.target.querySelector("source").play();

    // emit("render");
  }
  function dialogBgClick(e) {
    if (e.target.id == "dialogback") {
      emit("hide info");
    }
  }
}
