import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from './reducers';

function configureReduxDevtools() {
  // ? Checks for installed extension
  const isToolEnabled = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (process.env.NODE_ENV !== 'development' || !isToolEnabled) {
    return compose;
  }

  return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  });
}

function create() {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const composeEnhancers = configureReduxDevtools();
  const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, composedEnhancers);

  return store;
}

export default { create };
