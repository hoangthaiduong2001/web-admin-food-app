import { configureStore } from '@reduxjs/toolkit';
import { counterState } from './features/counter/counterSlice';

export const store = configureStore({
  reducer: counterState.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
