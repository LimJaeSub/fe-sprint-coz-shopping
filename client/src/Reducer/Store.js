import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
} from "redux";
import itemReducer from "./itemReducer";
import ToastReducer from "./ToastReducer";

const rootReducer = combineReducers({ itemReducer, ToastReducer });

const store = createStore(rootReducer);

export default store;
