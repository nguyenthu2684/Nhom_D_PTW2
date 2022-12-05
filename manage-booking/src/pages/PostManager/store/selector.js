import { INIT_STATE } from "./state";
import { createSelector } from "reselect";
const selectMyPost = (state) => state.postReducer || INIT_STATE;

const selectPosts = createSelector(selectMyPost, (state) => state.posts?.data || [])
const selectNewPost = createSelector(selectMyPost, (state) => state.newPost || [])
const selectdetailPost = createSelector(selectMyPost, (state) => state.newPost || [])

export {
    selectPosts,
    selectNewPost,
    selectdetailPost
}