import { Map, List, fromJS } from "immutable";
import types from "./types";

const initialState = Map({
    posts: List()
});

export default (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case types.GET_LIST_OF_POSTS: {
            return state.update("posts", () => fromJS(action.payload));
        }
        default: {
            return state;
        }
    }
};
