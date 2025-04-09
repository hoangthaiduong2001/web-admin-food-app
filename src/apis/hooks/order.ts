import { GetByIdCategoriesResType } from '@/types/categories';
import { ErrorType } from '@/types/error';
import {
  CreateOrderBodyType,
  CreateOrderResType,
  DeleteOrderResType,
  OrderResType,
  UpdateOrderBodyType,
  UpdateOrderResType,
} from '@/types/order';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCategoriesById } from '../api/categories';
import { createOrder, deleteOrder, getAllOrder, updateCategories } from '../api/order';

export const useGetAllOrder = () => {
  return useQuery<OrderResType, ErrorType>({
    queryFn: getAllOrder,
    queryKey: ['get-all-order'],
    refetchOnWindowFocus: false,
  });
};

export const useGetCategoriesById = ({ id }: { id: string }) => {
  return useQuery<GetByIdCategoriesResType, ErrorType>({
    queryFn: () => getCategoriesById(id),
    queryKey: ['get-categories'],
    enabled: !!id,
  });
};

export const useCreateOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<CreateOrderResType, ErrorType, CreateOrderBodyType>({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-order'] });
    },
  });
};

export const useUpdateOrderMutation = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  return useMutation<UpdateOrderResType, ErrorType, UpdateOrderBodyType>({
    mutationFn: (body: UpdateOrderBodyType) => updateCategories(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-order'], exact: true, refetchActive: true });
    },
  });
};

export const useDeleteOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<DeleteOrderResType, ErrorType, string>({
    mutationFn: (id: string) => deleteOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-order'], exact: true });
    },
  });
};
