import { UserRole } from './common';

export interface IUser {
  _id: string;
  username: string;
  email: string;
  role: UserRole;
}
