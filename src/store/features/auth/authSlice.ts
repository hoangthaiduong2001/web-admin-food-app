import { IUser } from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './const';

export const userState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      console.log('state', state.role);
      return action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = userState.actions;
