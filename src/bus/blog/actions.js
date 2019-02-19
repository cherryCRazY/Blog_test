import types from "./types";

export default {
    //Sync
    getListOfPosts: ({ data }) => ({
        type: types.GET_LIST_OF_POSTS,
        payload: data
    }),
    receivePost: ({ data }) => ({
        type: types.RECIEVE_POST,
        payload: data
    }),

    //Async
    getListOfPostsAsync: () => ({
        type: types.GET_LIST_OF_POSTS_ASYNC
    }),
    receivePostAsync: post => ({
        type: types.RECIEVE_POST,
        payload: post
    })
};
