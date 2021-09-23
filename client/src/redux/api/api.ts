import axios from 'axios'
import { IEmployee } from '../../types/interface';
export function getEmployees() {
    return axios.get('/api/employees')
        .then(res => res.data
        )
        .catch(err => err);
}

export function addEmployee(emp: IEmployee) {
    return axios.post('/api/employees', emp)
        .then(res => res.data)
        .catch(err => err);
}

export const deleteEmployee = (id: string) => {
    return axios.delete(`/api/employees/${id}`)
        .then(response => response)
        .catch(err => err);
}
export const updateEmployee = (emp: IEmployee) => {
    return axios.post('/api/employees/update', emp)
        .then(response => response)
        .catch(err => err);
}