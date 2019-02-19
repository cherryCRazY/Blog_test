//Core
import { put, apply } from "redux-saga/effects";

//Actions
import uiActions from "../../../ui/actions";
import blogActions from "../../actions";

//Instruments
import { Api } from "../../../../REST/api";

export function* receivePost({ id }) {
    try {
        yield put(uiActions.startFetching());

        const post = yield apply(Api, Api.receivePost, [id]);

        yield put(blogActions.receivePost(post));
    } catch (error) {
        yield put(uiActions.showErrorFetching(error.message));
        yield put(uiActions.hideErrorFetching());
    } finally {
        yield put(uiActions.stopFetching());
    }
}
