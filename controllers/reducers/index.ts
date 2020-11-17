import React from 'react';
import { combineReducers } from 'redux';
import { createSelectorHook } from 'react-redux';
import { IAction } from '../../types';
import reducer from './placeholder';

const rootReducer = combineReducers({ reducer });

export default rootReducer;
export type TSRoot = ReturnType<typeof rootReducer>;
export const useTypedSelector = createSelectorHook<TSRoot, IAction>();
