import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

// reducers
import combinedReducers from "../reducers";

// sagas
import combinedSagas from "../sagas";

// middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default function configStore(initialState) {
  const store = createStore(
    combinedReducers,
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(combinedSagas);

  return store;
}
