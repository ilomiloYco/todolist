import { applyMiddleware, compose, legacy_createStore } from "redux";
import reducer from "./reducer";
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
const sagaMiddleWares = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancer(applyMiddleware(sagaMiddleWares))
);
sagaMiddleWares.run(rootSaga);
export default store;
