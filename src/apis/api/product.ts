import { httpClient } from '@/config/utils';
import { apiUrl } from '@/types/common';
import { DeleteProductResType, GetAllProductResType, ProductBodyType, ProductResType } from '@/types/product';

export const getAllProduct = async () => {
  return httpClient<GetAllProductResType, null>(`${apiUrl}/products`, 'GET');
};

export const getProductById = async (id: string) => {
  return httpClient<ProductResType, null>(`${apiUrl}/products/${id}`, 'GET');
};

export const createProduct = async (body: ProductBodyType) => {
  return httpClient<ProductResType, ProductBodyType>(`${apiUrl}/products`, 'POST', body);
};

export const editProduct = async (body: ProductBodyType, id: string) => {
  return httpClient<ProductResType, ProductBodyType>(`${apiUrl}/products/${id}`, 'PUT', body);
};

export const deleteProduct = async (id: string) => {
  return httpClient<DeleteProductResType, null>(`${apiUrl}/products/${id}`, 'DELETE');
};
