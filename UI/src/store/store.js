import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../redux/reducers/combineReducers";
import taskReducer from "../redux/tasks/taskSlice";

const store = configureStore({
  reducer: taskReducer,
});

export default store;
