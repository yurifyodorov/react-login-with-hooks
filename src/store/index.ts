import * as Redux from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { Saga, Task } from '@redux-saga/types';
import createSagaMiddleware, { END } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, AppState } from './rootReducer';
import rootSaga from './rootSaga';

type SagaEnhancedStore<S> = Redux.Store<S> & {
  runSaga<SG extends Saga>(saga: SG, ...args: Parameters<SG>): Task;
  // eslint-disable-next-line @typescript-eslint/ban-types
  close: Function;
}

const configureStore = (preloadedState?: AppState): SagaEnhancedStore<AppState> => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, preloadedState, composeEnhancers) as SagaEnhancedStore<AppState>;

  sagaMiddleware.run(rootSaga);

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
