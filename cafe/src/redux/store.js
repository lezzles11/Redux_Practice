import {
  createStore,
  applyMiddleware,
  compose,
} from "redux";
import rootReducer from "./reducers/index";

let logger = (store) => (next) => (action) => {
  console.group("Dispatching: ", action.type);
  let result = next(action);
  console.log("Next state: ", store.getState());
  console.groupEnd();
  return result;
};

let FooLogger = (store) => (next) => (action) => {
  console.log("In foo: ");
  next(action);
};

let composeDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeDevTools(applyMiddleware(logger, FooLogger))
);

export default store;
