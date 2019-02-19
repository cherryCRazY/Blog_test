//Config
import { MAIN_URL } from "./config";

//Itils
import axios from "axios";

export const Api = {
    addComment(comment) {
        return axios.post(`${MAIN_URL}/comments`, comment);
    },
    addNewPost(post) {
        return axios.post(`${MAIN_URL}/posts`, post);
    },
    getListOfPosts() {
        return axios.get(`${MAIN_URL}/posts`);
    },
    receivePost(id) {
        return axios.get(`${MAIN_URL}/posts/${id}?_embed=comments`);
    }
};
