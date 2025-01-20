import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "./chartSlice";
import themeReducer from "./themeSlice";
const store = configureStore({
  reducer: {
    chart: chartReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
