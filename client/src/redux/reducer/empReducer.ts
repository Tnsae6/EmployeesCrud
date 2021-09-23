import {
  GET_EMPLOYEES,
  LIST_LOADING,
  ADD_EMPLYEE_SAGA,
  DELETE_EMPLYEE_SAGA,
  UPDATE_EMPLYEES_SAGA
} from '../actions/types';
import { IAction, IEmployee } from '../../types/interface';

const initialState = {
  emps: [],
  loading: false
};

interface IState {
  emps: IEmployee[];
}

export default function (state: IState = initialState, action: IAction) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        emps: action.payload,
        loading: false
      };
    case DELETE_EMPLYEE_SAGA:
      return {
        ...state,
        emps: state.emps.filter(emp => emp._id !== action.payload)
      };
    case ADD_EMPLYEE_SAGA:
      return {
        ...state,
        emps: [action.payload, ...state.emps]
      };
    case UPDATE_EMPLYEES_SAGA:

      return {
        ...state,
        emps: [action.payload, ...state.emps.filter(emp => emp._id !== action.payload._id)],
        loading: false
      }
    case LIST_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
