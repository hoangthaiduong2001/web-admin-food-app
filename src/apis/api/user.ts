import { httpClient } from '@/config/utils';
import { apiUrl } from '@/types/common';
import { DeleteUserResType, UserBodyType, UserByIdResType, UserResType } from '@/types/user';

export const getAllUser = async () => {
  return httpClient<UserResType, null>(`${apiUrl}/user`, 'GET');
};

export const getUserById = async (id: string) => {
  return httpClient<UserByIdResType, null>(`${apiUrl}/user/${id}`, 'GET');
};

export const createUser = async (body: UserBodyType) => {
  return httpClient<UserResType, UserBodyType>(`${apiUrl}/user`, 'POST', body);
};

export const editUser = async (body: UserBodyType, id: string) => {
  return httpClient<UserResType, UserBodyType>(`${apiUrl}/user/${id}`, 'PUT', body);
};

export const deleteUser = async (id: string) => {
  return httpClient<DeleteUserResType, null>(`${apiUrl}/user/${id}`, 'DELETE');
};
