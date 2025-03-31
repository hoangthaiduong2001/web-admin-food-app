import { httpClient } from '@/config/utils';
import { CartByIdResType, CartResType, EditCartBodyType, EditCartResType } from '@/types/cart';
import { apiUrl } from '@/types/common';
import { DeleteUserResType, UserBodyType, UserResType } from '@/types/user';

export const getAllCart = async () => {
  return httpClient<CartResType, null>(`${apiUrl}/carts`, 'GET');
};

export const getCartById = async (id: string) => {
  return httpClient<CartByIdResType, null>(`${apiUrl}/carts/${id}`, 'GET');
};

export const createUser = async (body: UserBodyType) => {
  return httpClient<UserResType, UserBodyType>(`${apiUrl}/user`, 'POST', body);
};

export const editCart = async (body: EditCartBodyType) => {
  return httpClient<EditCartResType, EditCartBodyType>(`${apiUrl}/carts`, 'PUT', body);
};

export const deleteUser = async (id: string) => {
  return httpClient<DeleteUserResType, null>(`${apiUrl}/user/${id}`, 'DELETE');
};
