import { Map, List, fromJS } from "immutable";
import types from "./types";

const initialState = Map({
    postsList: List(),
    post: null
});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LIST_OF_POSTS: {
            return state.update("postsList", () => fromJS(action.payload));
        }
        case types.RECIEVE_POST: {
            return state.set("post", action.payload);
        }
        default: {
            return state;
        }
    }
};
