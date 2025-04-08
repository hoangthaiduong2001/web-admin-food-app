import { httpClient } from '@/config/utils';
import {
  DeleteCategoriesResType,
  GetByIdCategoriesResType,
  UpdateCategoriesBodyType,
  UpdateCategoriesResType,
} from '@/types/categories';
import { apiUrl } from '@/types/common';
import { CreateOrderBodyType, CreateOrderResType, OrderResType } from '@/types/order';

export const getAllOrder = async () => {
  return httpClient<OrderResType, null>(`${apiUrl}/orders`, 'GET');
};

export const getCategoriesById = async (id: string) => {
  return httpClient<GetByIdCategoriesResType, null>(`${apiUrl}/categories/${id}`, 'GET');
};

export const createOrder = async (body: CreateOrderBodyType) => {
  return httpClient<CreateOrderResType, CreateOrderBodyType>(`${apiUrl}/orders`, 'POST', body);
};

export const editCategories = async (body: UpdateCategoriesBodyType, id: string) => {
  return httpClient<UpdateCategoriesResType, UpdateCategoriesBodyType>(`${apiUrl}/categories/${id}`, 'PUT', body);
};

export const deleteCategories = async (id: string) => {
  return httpClient<DeleteCategoriesResType, null>(`${apiUrl}/categories/${id}`, 'DELETE');
};

export const deleteCategoriesDetail = async (categoriesId: string, productId: string) => {
  return httpClient<DeleteCategoriesResType, null>(
    `${apiUrl}/categories/${categoriesId}/product/${productId}`,
    'DELETE'
  );
};
