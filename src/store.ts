import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookSlice from './slices/book';
import booksSlice from './slices/books';
import userSlice from './slices/user';

const rootReducer = combineReducers({
  bookSlice,
  booksSlice,
  userSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
