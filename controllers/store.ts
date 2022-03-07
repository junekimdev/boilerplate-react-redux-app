import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

const isClientside = () => typeof window !== 'undefined';
const isNonProduction = () => process.env.NODE_ENV !== 'production';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    // only client-side on non-production stage should enable redux debugger
    isClientside() && isNonProduction()
      ? compose(
          applyMiddleware(...middlewares),
          (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
        )
      : applyMiddleware(...middlewares);
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
