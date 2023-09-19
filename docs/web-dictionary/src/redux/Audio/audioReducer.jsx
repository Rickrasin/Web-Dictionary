import ActionTypes from "./action-types.jsx";

const initialState = {
  audio: null,
  audioRunning: false,
};

const audioReducer = (state = initialState, action) => {
  let newAudio = null;
  switch (action.type) {
    case ActionTypes.PLAY_AUDIO:
      newAudio = new Audio(action.payload);
      newAudio.currentTime = 0.1;
      newAudio.play();
      newAudio.addEventListener("ended", () => {
        return { ...state, audioRunning: false };
      });
      return { ...state, audio: newAudio, audioRunning: true };

    case ActionTypes.STOP_AUDIO:
      if (state.audio) {
        state.audio.pause();
        state.audio.currentTime = 0;
        newAudio = null;
      }
      return { ...state, audio: null, audioRunning: false };

    default:
      return state;
  }
};

export default audioReducer;
