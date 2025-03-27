import { UserRole } from '@/types/common';
import { IUser } from '@/types/user';

export const initialState: IUser = {
  _id: '',
  username: '',
  email: '',
  address: '',
  phone: '',
  role: UserRole.User,
};
