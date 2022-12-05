import { CREATE_POST, DELETE_POST, EDIT_POST, GET_ALL_POST, GET_DETAIL_POST, SAVE_ALL_POST, SAVE_DETAIL_POST, SAVE_NEW_POST } from "./constant";

export function getAllPostAction(payload) {
    return { type: GET_ALL_POST, payload }
}

export function saveAllPostAction(payload) {
    return { type: SAVE_ALL_POST, payload }
}

// export function createPostAction(payload) {
//     return { type: CREATE_POST, payload }
// }

export function saveNewPostAction(payload) {
    return { type: SAVE_NEW_POST, payload }
}

export const asyncCreatePostAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: CREATE_POST, payload, resolve })
    );

// export function getDetailPost(payload) {
//     return { type: GET_DETAIL_POST, payload }
// }

export function saveDetailPost(payload) {
    return { type: SAVE_DETAIL_POST, payload }
}

export const asyncDetailPostAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: GET_DETAIL_POST, payload, resolve })
    );

export const asyncEditPostAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: EDIT_POST, payload, resolve })
    );

export const asyncDeletePostAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: DELETE_POST, payload, resolve })
    );