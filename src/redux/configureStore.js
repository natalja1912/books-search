import { createStore, combineReducers, applyMiddleware } from "redux";
import { Books, Queries } from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    books: Books,
    query: Queries
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
