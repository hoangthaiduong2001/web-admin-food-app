import { CartByIdResType, CartResType, EditCartBodyType, EditCartResType } from '@/types/cart';
import { ErrorType } from '@/types/error';
import { DeleteUserResType, UserBodyType, UserResType } from '@/types/user';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { editCart, getAllCart, getCartById } from '../api/cart';
import { createUser, deleteUser } from '../api/user';

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

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<UserResType, ErrorType, UserBodyType>({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-user'] });
    },
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

export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<DeleteUserResType, ErrorType, string>({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-user'], exact: true });
    },
  });
};
