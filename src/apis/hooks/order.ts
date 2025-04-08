import {
  DeleteCategoriesResType,
  GetByIdCategoriesResType,
  UpdateCategoriesBodyType,
  UpdateCategoriesResType,
} from '@/types/categories';
import { ErrorType } from '@/types/error';
import { CreateOrderBodyType, CreateOrderResType, OrderResType } from '@/types/order';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteCategories, deleteCategoriesDetail, editCategories, getCategoriesById } from '../api/categories';
import { createOrder, getAllOrder } from '../api/order';

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

export const useUpdateCategoriesMutation = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  return useMutation<UpdateCategoriesResType, ErrorType, UpdateCategoriesBodyType>({
    mutationFn: (body: UpdateCategoriesBodyType) => editCategories(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-categories'], exact: true, refetchActive: true });
    },
  });
};

export const useDeleteCategoriesMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<DeleteCategoriesResType, ErrorType, string>({
    mutationFn: (id: string) => deleteCategories(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-categories'], exact: true });
    },
  });
};

export const useDeleteCategoriesDetailMutation = ({ categoriesId }: { categoriesId: string }) => {
  const queryClient = useQueryClient();
  return useMutation<DeleteCategoriesResType, ErrorType, string>({
    mutationFn: (productId: string) => deleteCategoriesDetail(categoriesId, productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-categories'], exact: true });
    },
  });
};
