import { takeLatest, call, put } from "redux-saga/effects";
import { getEmployees } from "./api/api";
import { GET_EMPLOYEES_SAGA } from "./actions/types";

function* handleGetEmplyee() {

    try {
        const data = yield call(getEmployees);
        yield put({ type: 'GET_EMPLOYEES', payload: data });

    } catch (e) {

        yield put({ type: 'GET_USERS_FAILED', message: e.message });
    }

}

export function* loadEmpWatcher() {
    yield takeLatest(GET_EMPLOYEES_SAGA, handleGetEmplyee);
    // yield takeLatest(ADD_EMPLYEE, loadEmpFlow);
}

