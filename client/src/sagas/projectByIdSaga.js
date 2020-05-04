import { put } from "redux-saga/effects";
import ACTION from "../actions/actionType";
import { getProjectById} from "../api/rest/restController";


export function* fetchProjectById({id}) {
    yield put({ type: ACTION.PROJECT_REQUEST });
    try {
        const { data } = yield getProjectById(id);
        yield put({ type: ACTION.ONE_PROJECT_RESPONSE, project: data });
    } catch (e) {
        yield put({ type: ACTION.PROJECT_ERROR, error: e });
    }
}
