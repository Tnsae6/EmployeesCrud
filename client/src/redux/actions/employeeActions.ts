// import axios from 'axios';
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


// import axios from 'axios';
// import {
//     GET_EMPLOYEES,
//     ADD_EMPLYEE,
//     DELETE_EMPLYEE,
//     LIST_LOADING,
//     UPDATE_EMPLYEES
// } from './types';

// // import { tokenConfig } from './authActions';
// import { returnErrors } from './errorAction';
// import { IEmployee } from '../../types/interface';

// export const getEmployees = async () => {

//     axios
//         .get('/api/employees')
//         .then(res => {
//             return res.data;
//         }
//         )
//         .catch(err =>
//             console.log(err)
//         );
// };

// export const addEmployee = (emp: IEmployee) => (dispatch: Function) => {

//     axios
//         .post('/api/employees', emp)
//         .then(res => {
//             return res.data;
//         }
//         )
//         .catch(err =>
//             console.log(err)
//         );
// };

// export const deleteEmployee = async (id: string) => {
//     axios
//         .delete(`/api/employees/${id}`)
//         .then(res => {
//             return res.data;
//         }
//         )
//         .catch(err =>
//             console.log(err)
//         );
// };

// export const updateEmployee = async (emp: IEmployee) => {

//     axios.post('/api/employees/update', emp).then(res => {
//         return res.data;
//     }
//     )
//         .catch(err =>
//             console.log(err)
//         );
// };

// export const setListLoading = () => {
//     return {
//         type: LIST_LOADING
//     };
// };
