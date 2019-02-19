//Core
import { MAIN_URL } from "../../../../REST/config";
import { put, apply } from "redux-saga/effects";

//Actions
import uiActions from "../../../ui/actions";
import blogActions from "../../actions";

//Itils
import axios from "axios";

export function* receivePost({ id }) {
    try {
        yield put(uiActions.startFetching());

        const post = yield apply(axios, axios.get, [
            `${MAIN_URL}/posts/${id}?_embed=comments`
        ]);

        yield put(blogActions.receivePost(post));
    } catch (error) {
        yield put(uiActions.showErrorFetching(error.message));
        yield put(uiActions.hideErrorFetching());
    } finally {
        yield put(uiActions.stopFetching());
    }
}
