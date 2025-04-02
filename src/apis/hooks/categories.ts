import {
  CategoriesResType,
  CreateCategoriesBodyType,
  CreateCategoriesResType,
  DeleteCategoriesResType,
  GetByIdCategoriesResType,
  UpdateCategoriesBodyType,
  UpdateCategoriesResType,
} from '@/types/categories';
import { ErrorType } from '@/types/error';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createCategories,
  deleteCategories,
  deleteCategoriesDetail,
  editCategories,
  getAllCategories,
  getCategoriesById,
} from '../api/categories';

export const useGetAllCategories = () => {
  return useQuery<CategoriesResType, ErrorType>({
    queryFn: getAllCategories,
    queryKey: ['get-all-categories'],
    refetchOnWindowFocus: false,
  });
};

export const useGetCategoriesById = ({ id }: { id: string }) => {
  return useQuery<GetByIdCategoriesResType, ErrorType>({
    queryFn: () => getCategoriesById(id),
    queryKey: ['get-categories'],
    enabled: !!id,
  });
};

export const useCreateCategoriesMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<CreateCategoriesResType, ErrorType, CreateCategoriesBodyType>({
    mutationFn: createCategories,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-categories'] });
    },
  });
};

export const useUpdateCategoriesMutation = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  return useMutation<UpdateCategoriesResType, ErrorType, UpdateCategoriesBodyType>({
    mutationFn: (body: UpdateCategoriesBodyType) => editCategories(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-categories'], exact: true, refetchActive: true });
    },
  });
};

export const useDeleteCategoriesMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<DeleteCategoriesResType, ErrorType, string>({
    mutationFn: (id: string) => deleteCategories(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-categories'], exact: true });
    },
  });
};

export const useDeleteCategoriesDetailMutation = ({ productId }: { productId: string }) => {
  const queryClient = useQueryClient();
  return useMutation<DeleteCategoriesResType, ErrorType, string>({
    mutationFn: (categoriesId: string) => deleteCategoriesDetail(categoriesId, productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-all-categories'], exact: true });
    },
  });
};
