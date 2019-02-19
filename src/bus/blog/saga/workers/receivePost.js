import uiActions from "../../../ui/actions";
import blogActions from "../../actions";
import axios from "axios";
import { MAIN_URL } from "../../../init/config";

import { put, apply } from "redux-saga/effects";

export function* receivePost({ id }) {
    try {
        console.log(id);
        yield put(uiActions.startFetching());
        const post = yield apply(axios, axios.get, [
            `${MAIN_URL}/posts/${id}?_embed=comments`
        ]);
        console.log(post);
        yield put(blogActions.receivePost(post));
    } catch (error) {
        yield put(uiActions.showErrorFetching(error.message));
        yield put(uiActions.hideErrorFetching());
    } finally {
        yield put(uiActions.stopFetching());
    }
}
