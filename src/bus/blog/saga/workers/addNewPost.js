//Core
import { put, apply } from "redux-saga/effects";

//Actions
import uiActions from "../../../ui/actions";

//Instruments
import { Api } from "../../../../REST/api";

export function* addNewPost({ post }) {
    try {
        yield put(uiActions.startFetching());

        yield apply(Api, Api.addNewPost, [post]);
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
