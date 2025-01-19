import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice'; // Make sure themeSlice.ts exists in the same directory.

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// Export RootState and AppDispatch types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
