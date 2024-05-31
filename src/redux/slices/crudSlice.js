import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      action.payload.id = uuidv4();

      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      state.tasks.splice(index, 1, action.payload);
    },
    deleteTask: (state, action) => {
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      state.tasks = filteredTasks;
    },
  },
});

export const { addTask, editTask, deleteTask } = crudSlice.actions;

export default crudSlice.reducer;
