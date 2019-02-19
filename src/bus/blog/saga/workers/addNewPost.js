import uiActions from "../../../ui/actions";
import axios from "axios";
import { MAIN_URL } from "../../../init/config";

import { put, apply } from "redux-saga/effects";

export function* addNewPost({ post }) {
    try {
        yield put(uiActions.startFetching());
        console.log(post);

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
