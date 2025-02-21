import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tasks: [],
  status: "idle",
  error: null,
};

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/create",
        taskData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks.push(action.payload.data);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export default taskSlice.reducer;
