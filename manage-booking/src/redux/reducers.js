import { combineReducers } from "redux";
import postReducer from "../pages/PostManager/store/reducer";
export default function createReducer() {
    const rootReducer = combineReducers({
        postReducer,
    })
    return rootReducer;
}