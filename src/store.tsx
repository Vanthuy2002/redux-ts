import { configureStore, combineReducers } from '@reduxjs/toolkit';
import blogReducer from './reducer/Blog.reducer';

const reducer = combineReducers({
  blog: blogReducer,
});

const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
