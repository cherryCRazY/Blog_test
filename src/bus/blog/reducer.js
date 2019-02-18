import { Map } from "immutable";

const initialState = Map({
    posts: []
});

export default (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
