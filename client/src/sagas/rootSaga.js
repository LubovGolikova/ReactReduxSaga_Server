import { takeLatest } from "redux-saga/effects";
import ACTION from "../actions/actionType";
import * as developerSaga from "./developerSaga";
import * as currentUserSaga from "./currentUserSaga";

import * as projectSaga from "./projectSaga";
import * as currentProjectSaga from "./currentProjectSaga";
import * as projectByIdSaga from "./projectByIdSaga";

function* rootSaga() {
    yield takeLatest(ACTION.FETCH_ALL_USERS, developerSaga.fetchAllUsers);
    yield takeLatest(ACTION.FETCH_USER_BY_ID, developerSaga.fetchUserById);
    yield takeLatest(ACTION.CREATE_ACCOUNT, currentUserSaga.createAccount);
    yield takeLatest(ACTION.DELETE_USER, developerSaga.deleteUser);
    //////////////////
    yield takeLatest(ACTION.FETCH_ALL_PROJECT, projectSaga.fetchAllProject);
    yield takeLatest(ACTION.FETCH_PROJECT_BY_ID, projectByIdSaga.fetchProjectById);
    yield takeLatest(ACTION.CREATE_PROJECT, currentProjectSaga.createProjectCurrent);
}

export default rootSaga;
