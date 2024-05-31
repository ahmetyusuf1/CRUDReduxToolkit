import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import crudSlice from "./slices/crudSlice";

const store = configureStore({
  reducer: { themeSlice, crudSlice },
});

export default store;
