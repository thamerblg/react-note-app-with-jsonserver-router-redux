import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import postReducers from "./Reducers/PostReducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  postReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
