import axios from "axios";
import ActionTypes from "./action-types";
import helloJson from "./../../JSON/dict.json";

const initialState = {
  wordData: helloJson,
  wordError: false,
  wordEmpty: false,
  isLoading: false,
};


const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WORD_DATA:
      return {
        ...state,
        wordData: action.payload,
        wordError: action.wordError,
        wordEmpty: action.wordEmpty,
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export const setWordData = (searchTerm) => async (dispatch) => {
  if (searchTerm == "") {
    dispatch({
      type: ActionTypes.SET_WORD_DATA,
      wordData: null,
      wordEmpty: true,
      wordError: false,
    });
  } else {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, isLoading: true });
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      const wordData = response.data;
      dispatch({
        type: ActionTypes.SET_WORD_DATA,
        payload: wordData,
        wordError: false,
        wordEmpty: false,
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        dispatch({
          type: ActionTypes.SET_WORD_DATA,
          payload: null,
          wordError: true,
        });
        return null;
      }
      console.log("Algum erro na requisição");
      return null;
    } finally {
      dispatch({ type: ActionTypes.SET_LOADING, isLoading: false });
    }
  }
};
export default apiReducer;
