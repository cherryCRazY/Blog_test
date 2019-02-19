//Core
import { put, apply } from "redux-saga/effects";
import { MAIN_URL } from "../../../../REST/config";

//Actions
import uiActions from "../../../ui/actions";
import blogActions from "../../actions";

//Itils
import axios from "axios";

export function* addComment({ comment }) {
    try {
        yield put(uiActions.startFetching());

        yield apply(axios, axios.post, [`${MAIN_URL}/comments`, comment]);

        yield put(blogActions.receivePostAsync(comment.postId));
    } catch (error) {
        yield put(uiActions.showErrorFetching(error.message));
        yield put(uiActions.hideErrorFetching());
    } finally {
        yield put(uiActions.stopFetching());
    }
}
