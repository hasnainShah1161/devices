import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducures from "./reducers/index";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducures,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
