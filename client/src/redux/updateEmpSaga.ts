import { takeLatest, call, put } from "redux-saga/effects";
import { updateEmployee } from "./api/api";

import { UPDATE_EMPLYEES_SAGA } from "./actions/types";

function* handeUpdateEmployee(action: any) {

    try {

        yield call(updateEmployee, action.payload);

    } catch (e) {

        yield put({ type: 'GET_USERS_FAILED', message: e.message });
    }

}

export function* updateEmployeeWatcher() {
    yield takeLatest(UPDATE_EMPLYEES_SAGA, handeUpdateEmployee);
}