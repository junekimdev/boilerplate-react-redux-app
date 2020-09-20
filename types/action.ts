import { Action } from 'redux';

export interface IAction<T = any> extends Action {
  type: string;
  payload: T;
}
