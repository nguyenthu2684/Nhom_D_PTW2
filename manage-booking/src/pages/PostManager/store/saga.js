import { takeLatest, put, call } from "redux-saga/effects"

import { saveAllPostAction, saveDetailPost, saveNewPostAction } from "./action"

import { GET_ALL_POST, CREATE_POST, GET_DETAIL_POST, EDIT_POST, DELETE_POST } from "./constant"
import { getListPostService, createPostService, getDetailPostService, editPostService, deletePostService } from "../../../api/manager-post"

function* fetchPostSaga() {
    try {
        const response = yield call(getListPostService)
        yield put(saveAllPostAction(response.data))
    } catch (error) {

    }
}

function* createPostSaga({ payload, resolve }) {
    try {
        const response = yield call(createPostService, payload)
        resolve(response.status)
        yield put(saveNewPostAction(response.data))
    } catch (error) {
        resolve(null)
    }
}

function* getDetailPostSaga({ payload, resolve }) {
    try {
        const response = yield call(getDetailPostService, payload)
        resolve(response.data)
        yield put(saveDetailPost(response.data))
    } catch (error) {
        resolve(null)
    }
}

function* editPostSaga({ payload, resolve }) {
    try {
        const response = yield call(editPostService, payload)
        resolve(response)
        console.log(response)
    } catch (error) {
        resolve(null)
    }
}

function* deletePostSaga({ payload, resolve }) {
    try {
        const response = yield call(deletePostService, payload)
        resolve(response)
    } catch (error) {
        resolve(null)
    }
}
export function* sagaPost() {
    yield takeLatest(GET_ALL_POST, fetchPostSaga)
    yield takeLatest(CREATE_POST, createPostSaga)
    yield takeLatest(GET_DETAIL_POST, getDetailPostSaga)
    yield takeLatest(EDIT_POST,editPostSaga)
    yield takeLatest(DELETE_POST,deletePostSaga)
}
