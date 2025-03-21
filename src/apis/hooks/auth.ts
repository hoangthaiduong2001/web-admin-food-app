import { LoginBodyType, LoginResType } from '@/types/auth';
import { ErrorType } from '@/types/error';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';

export const useLoginMutation = () => {
  return useMutation<LoginResType, ErrorType, LoginBodyType>({
    mutationFn: login,
  });
};
