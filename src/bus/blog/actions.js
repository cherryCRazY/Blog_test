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
    receivePostAsync: id => ({
        type: types.RECIEVE_POST_ASYNC,
        id
    }),
    addCommentAsync: comment => ({
        type: types.ADD_COMMENT_ASYNC,
        comment
    })
};
