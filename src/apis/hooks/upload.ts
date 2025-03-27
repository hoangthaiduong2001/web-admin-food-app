import { ErrorType } from '@/types/error';
import { UploadResType } from '@/types/upload';
import { useMutation } from '@tanstack/react-query';
import { uploadImage } from '../api/upload';

export const useUploadImageMutation = () => {
  return useMutation<UploadResType, ErrorType, FormData>({
    mutationFn: uploadImage,
  });
};
