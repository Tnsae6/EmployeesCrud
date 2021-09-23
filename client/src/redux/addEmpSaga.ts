import { takeLatest, call, put } from "redux-saga/effects";
import { addEmployee } from "./api/api";

import { ADD_EMPLYEE_SAGA } from "./actions/types";
function* handeAddEmployee(action: any) {
    console.log(action)
    try {
        yield call(addEmployee, action.payload);
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message });
    }

}

export function* addEmployeeWatcher() {
    yield takeLatest(ADD_EMPLYEE_SAGA, handeAddEmployee);
}