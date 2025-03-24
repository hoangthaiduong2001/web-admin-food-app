import { IUser } from './user';

export interface LoginBodyType {
  username: string;
}

export interface LoginResType {
  message: string;
  user: IUser;
}

export interface LogoutResType {
  message: string;
}
