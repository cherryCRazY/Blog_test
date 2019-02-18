import logger from "../blog/saga/watcher";
import { call, all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([call(logger)]);
}
