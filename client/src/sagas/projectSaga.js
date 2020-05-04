import { put } from "redux-saga/effects";
import ACTION from "../actions/actionType";
import {getAllProjects} from "../api/rest/restController";

export function* fetchAllProject() {
    yield put({ type: ACTION.PROJECT_REQUEST });
    try {
        const { data } = yield getAllProjects();
        yield put({ type: ACTION.PROJECT_RESPONSE, projects: data });
    } catch (e) {
        yield put({ type: ACTION.PROJECT_ERROR, error: e });
    }
}
