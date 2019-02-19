import { takeEvery, all, call } from "redux-saga/effects";
import types from "../types";
import { getListOfPosts } from "./workers";

function* watchgetListOfPosts() {
    yield takeEvery(types.GET_LIST_OF_POSTS_ASYNC, getListOfPosts);
}

export default function* logger() {
    yield all([call(watchgetListOfPosts)]);
}
