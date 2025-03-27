import { httpClient } from '@/config/utils';
import { apiUrl } from '@/types/common';
import { GetAllProductResType, ProductBodyType, ProductResType } from '@/types/product';
import { DeleteUserResType, UserBodyType, UserByIdResType, UserResType } from '@/types/user';

export const getAllProduct = async () => {
  return httpClient<GetAllProductResType, null>(`${apiUrl}/products`, 'GET');
};

export const getUserById = async (id: string) => {
  return httpClient<UserByIdResType, null>(`${apiUrl}/user/${id}`, 'GET');
};

export const createProduct = async (body: ProductBodyType) => {
  return httpClient<ProductResType, ProductBodyType>(`${apiUrl}/products`, 'POST', body);
};

export const editUser = async (body: UserBodyType, id: string) => {
  return httpClient<UserResType, UserBodyType>(`${apiUrl}/user/${id}`, 'PUT', body);
};

export const deleteUser = async (id: string) => {
  return httpClient<DeleteUserResType, null>(`${apiUrl}/user/${id}`, 'DELETE');
};
