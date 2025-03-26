import { ErrorType } from '@/types/error';
import { ProductResType } from '@/types/product';
import { useQuery } from '@tanstack/react-query';
import { getAllProduct } from '../api/product';

export const useGetAllProduct = () => {
  return useQuery<ProductResType, ErrorType>({
    queryFn: getAllProduct,
    queryKey: ['get-all-product'],
    refetchOnWindowFocus: false,
  });
};
