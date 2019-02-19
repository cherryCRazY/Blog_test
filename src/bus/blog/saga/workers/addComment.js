//Core
import { put, apply } from "redux-saga/effects";

//Actions
import uiActions from "../../../ui/actions";
import blogActions from "../../actions";

//Instruments
import { Api } from "../../../../REST/api";

export function* addComment({ comment }) {
    try {
        yield put(uiActions.startFetching());

        yield apply(Api, Api.addComment, [comment]);

        yield put(blogActions.receivePostAsync(comment.postId));
    } catch (error) {
        yield put(uiActions.showErrorFetching(error.message));
        yield put(uiActions.hideErrorFetching());
    } finally {
        yield put(uiActions.stopFetching());
    }
}
