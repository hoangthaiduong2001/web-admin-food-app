import { CartByIdResType, CartResType, DeleteCartResType, EditCartBodyType, EditCartResType } from '@/types/cart';
import { ErrorType } from '@/types/error';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteCart, editCart, getAllCart, getCartById } from '../api/cart';

export const useGetAllCart = () => {
  return useQuery<CartResType, ErrorType>({
    queryFn: getAllCart,
    queryKey: ['get-all-cart'],
    refetchOnWindowFocus: false,
  });
};

export const useGetCartById = ({ id }: { id: string }) => {
  return useQuery<CartByIdResType, ErrorType>({
    queryFn: () => getCartById(id),
    queryKey: ['get-user'],
    enabled: !!id,
  });
};

export const useUpdateCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<EditCartResType, ErrorType, EditCartBodyType>({
    mutationFn: (body: EditCartBodyType) => editCart(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-cart'], exact: true, refetchActive: true });
    },
  });
};

export const useDeleteCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<DeleteCartResType, ErrorType, string>({
    mutationFn: (id: string) => deleteCart(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-cart'], exact: true });
    },
  });
};
