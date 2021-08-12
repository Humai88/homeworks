import { themeReducer } from "./../../h12/bll/themeReducer";
import { combineReducers, createStore } from "redux";
import { loadingReducer } from "./loadingReducer";

const reducers = combineReducers({
  loading: loadingReducer,
  theme: themeReducer,
});

const store = createStore(reducers);

export default store;

export type AppStoreType = ReturnType<typeof reducers>;

// @ts-ignore
window.store = store; // for dev
