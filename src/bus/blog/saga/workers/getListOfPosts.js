import uiActions from "../../../ui/actions";
import blogActions from "../../actions";
import axios from "axios";
import { MAIN_URL } from "../../../init/config";

import { put, apply } from "redux-saga/effects";

export function* getListOfPosts() {
    try {
        yield put(uiActions.startFetching());

        const posts = yield apply(axios, axios.get, [`${MAIN_URL}/posts`]);

        yield put(blogActions.getListOfPosts(posts));
    } catch (error) {
        yield put(uiActions.showErrorFetching(error.message));
        yield put(uiActions.hideErrorFetching());
    } finally {
        yield put(uiActions.stopFetching());
    }
}
