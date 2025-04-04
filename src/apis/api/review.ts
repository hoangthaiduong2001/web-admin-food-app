import { httpClient } from '@/config/utils';
import { apiUrl } from '@/types/common';
import { DeleteReviewResType, ReviewResType } from '@/types/review';

export const getAllReview = async () => {
  return httpClient<ReviewResType, null>(`${apiUrl}/reviews`, 'GET');
};

export const getReviewById = async (id: string) => {
  return httpClient<ReviewResType, null>(`${apiUrl}/reviews/${id}`, 'GET');
};

export const deleteReview = async (id: string) => {
  return httpClient<DeleteReviewResType, null>(`${apiUrl}/reviews/${id}`, 'DELETE');
};
