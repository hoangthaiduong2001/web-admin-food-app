import { ErrorType } from '@/types/error';
import { DeleteProductResType, GetAllProductResType, ProductBodyType, ProductResType } from '@/types/product';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createProduct, deleteProduct, editProduct, getAllProduct, getProductById } from '../api/product';

export const useGetAllProduct = () => {
  return useQuery<GetAllProductResType, ErrorType>({
    queryFn: getAllProduct,
    queryKey: ['get-all-product'],
    refetchOnWindowFocus: false,
  });
};

export const useGetProductById = ({ id }: { id: string }) => {
  return useQuery<ProductResType, ErrorType>({
    queryFn: () => getProductById(id),
    queryKey: ['get-product'],
    enabled: !!id,
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

export const useUpdateProductMutation = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  return useMutation<ProductResType, ErrorType, ProductBodyType>({
    mutationFn: (body: ProductBodyType) => editProduct(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-product'], exact: true, refetchActive: true });
    },
  });
};

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<DeleteProductResType, ErrorType, string>({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-product'], exact: true });
    },
  });
};
