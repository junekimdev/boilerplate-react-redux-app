import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({ reducer, middleware });

sagaMiddleware.run(rootSaga);

export type TSRoot = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<TSRoot> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
