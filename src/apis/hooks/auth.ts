import { LoginBodyType, LoginResType, LogoutResType } from '@/types/auth';
import { ErrorType } from '@/types/error';
import { useMutation, useQuery } from '@tanstack/react-query';
import { login, logout } from '../api/auth';

export const useLoginMutation = () => {
  return useMutation<LoginResType, ErrorType, LoginBodyType>({
    mutationFn: login,
  });
};

export const useLogoutMutation = () => {
  return useQuery<LogoutResType, ErrorType>({
    queryFn: logout,
    queryKey: ['logoutUser'],
  });
};
