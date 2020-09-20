import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const rootReducer = combineReducers({ });

export default rootReducer;
export type TSRoot = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<TSRoot> = useSelector;
