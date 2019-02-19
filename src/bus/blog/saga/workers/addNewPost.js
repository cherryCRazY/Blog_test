//Core
import { put, apply } from "redux-saga/effects";
import { MAIN_URL } from "../../../../REST/config";

//Actions
import uiActions from "../../../ui/actions";

//Itils
import axios from "axios";

export function* addNewPost({ post }) {
    try {
        yield put(uiActions.startFetching());

        yield apply(axios, axios.post, [`${MAIN_URL}/posts`, post]);
        yield put(
            uiActions.showSussesLabel("Congratulations you created new post")
        );
        yield put(uiActions.hideSussesLabel());
    } catch (error) {
        yield put(uiActions.showErrorFetching(error.message));
        yield put(uiActions.hideErrorFetching());
    } finally {
        yield put(uiActions.stopFetching());
    }
}
