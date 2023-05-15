import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import itemReducer from "./itemReducer";

const store = createStore(itemReducer);

export default store;
