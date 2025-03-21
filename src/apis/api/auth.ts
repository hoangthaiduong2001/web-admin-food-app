import { httpClient } from '@/config/utils';
import { LoginBodyType, LoginResType } from '@/types/auth';
import { apiUrl } from '@/types/common';

export const login = async (body: LoginBodyType) => {
  return httpClient<LoginResType, LoginBodyType>(`${apiUrl}/session/login`, 'POST', body);
};
