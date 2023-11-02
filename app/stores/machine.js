import text from "/list?raw";

export default (state, emitter) => {
  state.videos = text.split("\n").filter(e => e.length > 0);

  state.playback = [];
  for(let i = 0; i < 1; i++) {
    state.playback[i] = {
      id: i,
      i,
      url: "videos-converted/" + state.videos[i],
    }
    if (!!state.params.video) {
      state.playback[i].url = state.params.video;
    }
  }

  state.windowCount = 0;
  state.windowPosition = [0, 0];
}