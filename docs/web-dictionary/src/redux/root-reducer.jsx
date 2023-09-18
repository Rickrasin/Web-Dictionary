import { combineReducers } from "redux";

import themeReducer from "./Theme/reducer";
import audioReducer from "./Audio/AudioReducer";
import apiReducer from "./API/apiReducer";

const rootReducer = combineReducers({ themeReducer, audioReducer, apiReducer });

export default rootReducer;
