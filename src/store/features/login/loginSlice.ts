import { UserRole } from '@/types/common';
import { IUser } from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUser = {
  _id: '',
  username: '',
  email: '',
  role: UserRole.User,
};

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
