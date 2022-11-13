import { CREATE_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT, GET_ALL_ACCOUNT, GET_DETAIL_ACCOUNT, SAVE_ALL_ACCOUNT, SAVE_DETAIL_ACCOUNT, SAVE_NEW_ACCOUNT } from "./constan";

export function getAllAccountAction(payload) {
    return { type: GET_ALL_ACCOUNT, payload }
}

export function saveAllAccountAction(payload) {
    return { type: SAVE_ALL_ACCOUNT, payload }
}

export const asyncCreateAccountAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: CREATE_ACCOUNT, payload, resolve })
    );
export function saveNewAccountAction(payload) {
    return { type: SAVE_NEW_ACCOUNT, payload }
}

export const asyncDeleteAccountAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: DELETE_ACCOUNT, payload, resolve })
    );

export const asyncDetailAccountAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: GET_DETAIL_ACCOUNT, payload, resolve })
    );

export function saveDetailAccountAction(payload) {
    return { type: SAVE_DETAIL_ACCOUNT, payload }
}

export const asyncEditAccountAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: EDIT_ACCOUNT, payload, resolve })
    );