//Core
import { put, apply } from "redux-saga/effects";

//Instruments
import blogActions from "../actions";
import uiActions from "../../ui/actions";
import { addComment } from "../saga/workers";
import { Api } from "../../../REST/api";

const testObj = {
    comment: {
        postId: "Test postId",
        body: "Test body"
    }
};

const saga = addComment(testObj);

//Cases
describe("addComment saga: ", () => {
    describe("should pass till response received", () => {
        test("should dispatch startFetching action", () => {
            expect(saga.next().value).toEqual(put(uiActions.startFetching()));
        });
        test("should call a fetch request", () => {
            expect(saga.next().value).toEqual(
                apply(Api, Api.addComment, [testObj.comment])
            );
        });
        test("should dispatch a receivePostAsync action", () => {
            expect(saga.next().value).toEqual(
                put(blogActions.receivePostAsync(testObj.comment.postId))
            );
        });
    });
});
