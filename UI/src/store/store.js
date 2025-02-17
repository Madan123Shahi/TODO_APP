import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/reducers/combineReducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
