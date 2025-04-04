import { ErrorType } from '@/types/error';
import { DeleteReviewResType, ReviewResType } from '@/types/review';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteReview, getAllReview, getReviewById } from '../api/review';

export const useGetAllReview = () => {
  return useQuery<ReviewResType, ErrorType>({
    queryFn: getAllReview,
    queryKey: ['get-all-review'],
    refetchOnWindowFocus: false,
  });
};

export const useGetReviewById = ({ id }: { id: string }) => {
  return useQuery<ReviewResType, ErrorType>({
    queryFn: () => getReviewById(id),
    queryKey: ['get-review'],
    enabled: !!id,
  });
};

export const useDeleteReviewMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<DeleteReviewResType, ErrorType, string>({
    mutationFn: (id: string) => deleteReview(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-review'], exact: true });
    },
  });
};
