import { httpClient } from '@/config/utils';
import { apiUrl } from '@/types/common';
import {
  CreateOrderBodyType,
  CreateOrderResType,
  DeleteOrderResType,
  OrderResType,
  UpdateOrderBodyType,
  UpdateOrderResType,
} from '@/types/order';

export const getAllOrder = async () => {
  return httpClient<OrderResType, null>(`${apiUrl}/orders`, 'GET');
};

export const createOrder = async (body: CreateOrderBodyType) => {
  return httpClient<CreateOrderResType, CreateOrderBodyType>(`${apiUrl}/orders`, 'POST', body);
};

export const updateCategories = async (body: UpdateOrderBodyType, id: string) => {
  return httpClient<UpdateOrderResType, UpdateOrderBodyType>(`${apiUrl}/orders/${id}`, 'PUT', body);
};

export const deleteOrder = async (id: string) => {
  return httpClient<DeleteOrderResType, null>(`${apiUrl}/orders/${id}`, 'DELETE');
};
