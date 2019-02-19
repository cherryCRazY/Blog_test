//Core
import { put, apply } from "redux-saga/effects";

//Actions
import uiActions from "../../../ui/actions";
import blogActions from "../../actions";

//Instruments
import { Api } from "../../../../REST/api";

export function* getListOfPosts() {
    try {
        yield put(uiActions.startFetching());

        const posts = yield apply(Api, Api.getListOfPosts, []);

        yield put(blogActions.getListOfPosts(posts));
    } catch (error) {
        yield put(uiActions.showErrorFetching(error.message));
        yield put(uiActions.hideErrorFetching());
    } finally {
        yield put(uiActions.stopFetching());
    }
}
