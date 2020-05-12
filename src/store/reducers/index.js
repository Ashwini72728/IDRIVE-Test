import { combineReducers } from "redux";
import tags from "./tags.reducer";

const appReducer = combineReducers({ tags });

export default appReducer;
