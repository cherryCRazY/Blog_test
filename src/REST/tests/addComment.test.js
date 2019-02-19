//Core
import { put, apply } from "redux-saga/effects";
// import { cloneableGenerator } from "redux-saga/utils";

//Instruments
import blogActions from "../../bus/blog/actions";
import uiActions from "../../bus/ui/actions";
import { addComment } from "../../bus/blog/saga/workers";

const addCommentAsync = blogActions.addCommentAsync();
const postObj = {
    comment: {
        title: "Test title",
        body: "Test body"
    }
};

const saga = addComment({}); //cloneableGenerator(addComment)(addCommentAsync);
let clone = null;

//Cases
describe("fillmarketItems saga: ", () => {
    describe("should pass till response received", () => {
        test("should dispatch startFetching action", () => {
            expect(saga.next().value).toEqual(put(uiActions.startFetching()));
        });
        // test("should call a fetch request", () => {
        //     expect(saga.next().value).toEqual(
        //         apply(Api, Api.market.fetchMarketItems)
        //     );
        //     clone = saga.clone();
        // });
    });
});
