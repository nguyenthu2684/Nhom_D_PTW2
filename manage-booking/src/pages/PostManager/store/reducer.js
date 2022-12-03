import { INIT_STATE } from "./state";

import { SAVE_ALL_POST, SAVE_DETAIL_POST, SAVE_NEW_POST } from "./constant";

import produce from "immer";

export default function postReducer(state = INIT_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case SAVE_ALL_POST:
                draft.posts.data = action.payload
                break;
            case SAVE_NEW_POST:
                draft.newPost = action.payload
                break;
                case SAVE_DETAIL_POST:
                draft.detailPost = action.payload
                break;
            default:
                return state;
        }
    })
}