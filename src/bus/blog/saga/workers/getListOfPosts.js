//Core
import { put, apply } from "redux-saga/effects";
import { MAIN_URL } from "../../../../REST/config";

//Actions
import uiActions from "../../../ui/actions";
import blogActions from "../../actions";

//Itils
import axios from "axios";

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
