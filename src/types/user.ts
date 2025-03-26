import { UserRole } from './common';

export interface IUser {
  _id: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  role: UserRole;
}

export interface UserBodyType {
  username: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

export interface UserResType {
  message: string;
  data: IUser[];
}

export interface UserByIdResType {
  message: string;
  data: IUser & { password: string };
}

export interface DeleteUserResType {
  message: string;
}
