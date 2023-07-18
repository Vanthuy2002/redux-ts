import { configureStore, combineReducers } from '@reduxjs/toolkit';
import BlogSlice from './reducer/Blog.slice';

const reducer = combineReducers({
  blog: BlogSlice,
});

const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
