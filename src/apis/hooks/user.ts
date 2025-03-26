import { ErrorType } from '@/types/error';
import { DeleteUserResType, UserBodyType, UserByIdResType, UserResType } from '@/types/user';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createUser, deleteUser, editUser, getAllUser, getUserById } from '../api/user';

export const useGetAllUser = () => {
  return useQuery<UserResType, ErrorType>({
    queryFn: getAllUser,
    queryKey: ['get-all-user'],
    refetchOnWindowFocus: false,
  });
};

export const useGetUserById = ({ id }: { id: string }) => {
  return useQuery<UserByIdResType, ErrorType>({
    queryFn: () => getUserById(id),
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

export const useUpdateUserMutation = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  return useMutation<UserResType, ErrorType, UserBodyType>({
    mutationFn: (body: UserBodyType) => editUser(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-user'], exact: true, refetchActive: true });
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
