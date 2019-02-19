import { takeEvery, all, call } from "redux-saga/effects";
import types from "../types";
import { getListOfPosts, receivePost } from "./workers";

function* watchgetListOfPosts() {
    yield takeEvery(types.GET_LIST_OF_POSTS_ASYNC, getListOfPosts);
}

function* watchgetReceivePost(id) {
    yield takeEvery(types.RECIEVE_POST_ASYNC, receivePost);
}

export default function* logger() {
    yield all([call(watchgetListOfPosts), call(watchgetReceivePost)]);
}
