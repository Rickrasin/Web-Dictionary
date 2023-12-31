import axios from "axios";
import ActionTypes from "./action-types";
import helloJson from "./../../JSON/dict.json";

const initialState = {
  wordData: helloJson,
  wordError: false,
  isLoading: false,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WORD_DATA:
      return {
        ...state,
        wordData: action.payload,
        wordError: action.wordError,
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
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
    );

    dispatch({ type: ActionTypes.SET_LOADING, isLoading: true });

    const wordData = response.data;
    dispatch({
      type: ActionTypes.SET_WORD_DATA,
      payload: wordData,
      wordError: false,
    });

    return wordData; // Return the wordData when successful
  } catch (error) {
    if (error.response && error.response.status === 404) {
      const wordData = error.response.data;
      dispatch({
        type: ActionTypes.SET_WORD_DATA,
        payload: wordData,
        wordError: true,
      });
      return wordData;
    }
    console.log("Algum erro na requisição");
    return null;
  } finally {
    dispatch({ type: ActionTypes.SET_LOADING, isLoading: false });
  }
};

export default apiReducer;
