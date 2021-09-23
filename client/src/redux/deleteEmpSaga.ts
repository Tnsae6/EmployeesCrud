import { takeLatest, call, put } from "redux-saga/effects";
import { deleteEmployee } from "./api/api";

import { DELETE_EMPLYEE_SAGA } from "./actions/types";

function* handeDeleteEmployee(action: any) {

    try {
        yield call(deleteEmployee, action.payload);

    } catch (e) {

        yield put({ type: 'GET_USERS_FAILED', message: e.message });
    }

}

export function* deleteEmployeeWatcher() {
    yield takeLatest(DELETE_EMPLYEE_SAGA, handeDeleteEmployee);
}