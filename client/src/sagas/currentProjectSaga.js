import { put } from "redux-saga/effects";
import ACTION from "../actions/actionType";
import {} from "../api/rest/restController";
import {registrationProject} from "../api/rest/restController";

export function* createProjectCurrent({createProjectData}) {
    yield put({ type: ACTION.CURRENT_PROJECT_REQUEST });
    try {
        const { data } = yield registrationProject(createProjectData);
        yield put({ type: ACTION.CURRENT_PROJECT_RESPONSE, currentProject: data });
    } catch (e) {
        yield put({ type: ACTION.CURRENT_PROJECT_ERROR, error: e });
    }
}