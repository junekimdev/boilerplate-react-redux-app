import { Reducer } from 'redux';
import { IAction } from '../types';

const initialState = {};

const reducer: Reducer<any, IAction> = (state = initialState, _action) => {
  return state;
};

export default reducer;
