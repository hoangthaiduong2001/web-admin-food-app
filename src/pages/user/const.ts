import { ItemSelect } from '@/components/Select/type';
import { UserRole } from '@/types/common';
import { IUser } from '@/types/user';
import { UserSchemaType } from './schema';

export const filterUserTable: ItemSelect[] = [
  {
    label: 'Username',
    value: 'username',
  },
  {
    label: 'Address',
    value: 'address',
  },
  {
    label: 'Phone',
    value: 'phone',
  },
  {
    label: 'Email',
    value: 'email',
  },
];

export const defaultCreateUser: UserSchemaType = {
  username: '',
  address: '',
  phone: '',
  email: '',
  password: '',
};

export const defaultValueUser: IUser = {
  _id: '',
  username: '',
  address: '',
  phone: '',
  email: '',
  role: UserRole.User,
};
