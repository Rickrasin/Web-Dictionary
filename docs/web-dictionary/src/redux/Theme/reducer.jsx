import ThemeActionTypes from "./action-types";

const initialState = {
  themePage: "light",
  fontView: "Sans Serif",
  fontPage: "sans-serif",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ThemeActionTypes.SET_THEME:
      return { ...state, themePage: action.theme };

    case ThemeActionTypes.SET_FONT:
      return { ...state, fontView: action.fontView, fontPage: action.fontPage };
    default:
      return state;
  }
};

export default themeReducer;
