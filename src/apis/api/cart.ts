import { httpClient } from '@/config/utils';
import { CartByIdResType, CartResType, DeleteCartResType, EditCartBodyType, EditCartResType } from '@/types/cart';
import { apiUrl } from '@/types/common';

export const getAllCart = async () => {
  return httpClient<CartResType, null>(`${apiUrl}/carts`, 'GET');
};

export const getCartById = async (id: string) => {
  return httpClient<CartByIdResType, null>(`${apiUrl}/carts/${id}`, 'GET');
};

export const editCart = async (body: EditCartBodyType) => {
  return httpClient<EditCartResType, EditCartBodyType>(`${apiUrl}/carts`, 'PUT', body);
};

export const deleteCart = async (id: string) => {
  return httpClient<DeleteCartResType, null>(`${apiUrl}/carts/${id}`, 'DELETE');
};
