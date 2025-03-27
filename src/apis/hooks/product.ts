import { ErrorType } from '@/types/error';
import { GetAllProductResType, ProductBodyType, ProductResType } from '@/types/product';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createProduct, getAllProduct } from '../api/product';

export const useGetAllProduct = () => {
  return useQuery<GetAllProductResType, ErrorType>({
    queryFn: getAllProduct,
    queryKey: ['get-all-product'],
    refetchOnWindowFocus: false,
  });
};

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<ProductResType, ErrorType, ProductBodyType>({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-product'] });
    },
  });
};
