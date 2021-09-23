
import {
    LIST_LOADING,
    GET_EMPLOYEES_SAGA,
    ADD_EMPLYEE_SAGA,
    UPDATE_EMPLYEES_SAGA,
    DELETE_EMPLYEE_SAGA
} from './types';

import { IEmployee } from '../../types/interface';

export function getemp() {
    return {
        type: GET_EMPLOYEES_SAGA,
    }
}
export const addemp = (emp: IEmployee) => {
    return {
        type: ADD_EMPLYEE_SAGA,
        payload: emp
    }
};
export const updateemp = (emp: IEmployee) => {
    return {
        type: UPDATE_EMPLYEES_SAGA,
        payload: emp
    }
};
export function deleteemp(id: string) {
    return {
        type: DELETE_EMPLYEE_SAGA,
        payload: id
    }
};
export const setListLoading = () => {
    return {
        type: LIST_LOADING
    };
};
