import { combineReducers } from "redux";
import blogReducer from "../blog/reducer";
import uiReducer from "../ui/reducer";

export default combineReducers({
    blog: blogReducer,
    ui: uiReducer
});
