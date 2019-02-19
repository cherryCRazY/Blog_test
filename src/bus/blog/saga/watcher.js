import { takeEvery, all, call } from "redux-saga/effects";
import types from "../types";
import { getListOfPosts, receivePost, addComment, addNewPost } from "./workers";

function* watchgetListOfPosts() {
    yield takeEvery(types.GET_LIST_OF_POSTS_ASYNC, getListOfPosts);
}

function* watchgetReceivePost() {
    yield takeEvery(types.RECIEVE_POST_ASYNC, receivePost);
}
function* watchgetAddComment() {
    yield takeEvery(types.ADD_COMMENT_ASYNC, addComment);
}
function* watchgetAddNewPost() {
    yield takeEvery(types.ADD_NEW_POST_ASYNC, addNewPost);
}

export default function* logger() {
    yield all([
        call(watchgetListOfPosts),
        call(watchgetAddComment),
        call(watchgetAddNewPost),
        call(watchgetReceivePost)
    ]);
}
