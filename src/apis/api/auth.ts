import { httpClient } from '@/config/utils';
import { LoginBodyType, LoginResType, LogoutResType } from '@/types/auth';
import { apiUrl } from '@/types/common';

export const login = async (body: LoginBodyType) => {
  return httpClient<LoginResType, LoginBodyType>(`${apiUrl}/session/login`, 'POST', body);
};

export const logout = async () => {
  return httpClient<LogoutResType, null>(`${apiUrl}/session/logout`, 'GET');
};
