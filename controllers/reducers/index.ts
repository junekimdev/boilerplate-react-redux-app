import { combineReducers } from 'redux';
import { createSelectorHook } from 'react-redux';
import { IAction } from '../../types';
import placeholder from './placeholder';

const rootReducer = combineReducers({ placeholder });

export default rootReducer;
export type TSRoot = ReturnType<typeof rootReducer>;
export const useTypedSelector = createSelectorHook<TSRoot, IAction>();
