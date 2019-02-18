import { takeEvery } from "redux-saga/effects";

export default function* logger() {
    yield takeEvery("*", console.log);
}
