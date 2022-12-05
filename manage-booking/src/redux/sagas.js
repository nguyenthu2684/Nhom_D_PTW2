import { all } from "redux-saga/effects"
import { sagaPost } from "../pages/PostManager/store/saga"
// import * as studentsSagas from "../Pages/MyClass/stores/";
// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield all([
        // student
        sagaPost(),
    ]);
}