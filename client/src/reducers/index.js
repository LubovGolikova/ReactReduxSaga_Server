import { combineReducers } from "redux";

import developerReducer from "./developerReducer";
import currentUserReducer from "./currentUserReducer";

import projectReducer from "./projectReducer";
import currentProjectReducer from "./currentProjectReducer";
import projectByIdReducer from "./projectByIdReducer";
const appReducer =  combineReducers({
    developerReducer, currentUserReducer,projectReducer,currentProjectReducer,
    projectByIdReducer
});


const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
