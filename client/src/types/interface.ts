import { E_ERROR } from './enum';

export interface IEmployee {
    _id?: String;
    name: String;
    birthday: String;
    gender: String;
    salary: String;
}

export interface IEmployeeModal {
    addEmployee(emp: IEmployee): void;
}
export interface IPresentEmpList {
    _id: string;
    name: string;
    birthday: string;
    gender: string;
    salary: string;
}

export interface IEmpReduxProps {
    emp: {
        emps: IPresentEmpList[]
    }
}
export interface IEmpList {
    emp: {
        emps: IPresentEmpList[]
    };
}

export interface ITarget {
    target: {
        value: React.SetStateAction<string>;
    };
    preventDefault(): void;
}
// ERRORS
export interface IMsg {
    msg: string | any;
}

export interface IError {
    id: E_ERROR;
    msg: IMsg;
}

export interface IAction {
    type: string;
    payload?: any;
}


