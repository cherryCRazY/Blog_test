import types from "./types";
import { Map } from "immutable";

const initialState = Map({
    isFetching: false,
    errorLabel: false,
    successLabel: false,
    successMessage: "",
    errorMessage: ""
});

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case types.START_FETCHING: {
            return state.set("isFetching", true);
        }
        case types.STOP_FETCHING: {
            return state.set("isFetching", false);
        }
        case types.SHOW_SUCCES_LABEL: {
            return state
                .set("successLabel", true)
                .set("successMessage", action.payload);
        }
        case types.HIDE_SUCCES_LABEL: {
            return state.set("successLabel", false).set("successMessage", "");
        }
        case types.SHOW_ERROR_FETCHING: {
            return state
                .set("errorLabel", true)
                .set("errorMessage", action.payload);
        }
        case types.HIDE_ERROR_FETCHING: {
            return state.set("errorLabel", false).set("errorMessage", "");
        }
        default: {
            return state;
        }
    }
};
