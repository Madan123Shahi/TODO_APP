import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "../reducer/taskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
