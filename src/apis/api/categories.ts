import { httpClient } from '@/config/utils';
import {
  CategoriesResType,
  CreateCategoriesBodyType,
  CreateCategoriesResType,
  DeleteCategoriesResType,
  GetByIdCategoriesResType,
  UpdateCategoriesBodyType,
  UpdateCategoriesResType,
} from '@/types/categories';
import { apiUrl } from '@/types/common';

export const getAllCategories = async () => {
  return httpClient<CategoriesResType, null>(`${apiUrl}/categories`, 'GET');
};

export const getCategoriesById = async (id: string) => {
  return httpClient<GetByIdCategoriesResType, null>(`${apiUrl}/categories/${id}`, 'GET');
};

export const createCategories = async (body: CreateCategoriesBodyType) => {
  return httpClient<CreateCategoriesResType, CreateCategoriesBodyType>(`${apiUrl}/categories`, 'POST', body);
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
