import { IUser } from '@/types/user';

export const setUserInfo = (user: IUser) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserInfo = (): IUser | null => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return null;
};
