import { httpClient } from '@/config/utils';
import { apiUrl } from '@/types/common';
import { UploadResType } from '@/types/upload';

export const uploadImage = async (formData: FormData) => {
  return httpClient<UploadResType, FormData>(`${apiUrl}/upload/images`, 'POST', formData);
};
