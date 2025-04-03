import { useCreateCategoriesMutation } from '@/apis/hooks/categories';
import { useGetAllProduct } from '@/apis/hooks/product';
import Dialog from '@/components/Dialog';
import { Option } from '@/components/MultipleSelect/type';
import { showToast } from '@/components/Toast';
import { IProduct } from '@/types/product';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { defaultCreateCategories } from '../const';
import { CategoriesSchema, CategoriesSchemaType } from '../schema';
import FormCategories from './form';

const AddCategories = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option[]>([]);
  const { mutate: createCategories } = useCreateCategoriesMutation();
  const dataAllProduct = useGetAllProduct();
  const convertToOption = (data: IProduct[]): Option[] => {
    return (
      data.map((item) => ({
        label: item.title,
        value: item._id,
      })) || []
    );
  };
  const form = useForm<CategoriesSchemaType>({
    resolver: yupResolver(CategoriesSchema),
    defaultValues: defaultCreateCategories,
  });
  const { handleSubmit, reset } = form;
  const onSubmit = handleSubmit((data) => {
    const products = selected.map((item) => ({ product: item.value }));
    createCategories(
      { name: data.name, products },
      {
        onSuccess: (data) => {
          showToast({ message: data.message, type: 'success' });
          setOpenDialog(false);
          reset();
        },
        onError: (error) => {
          showToast({ message: error.message, type: 'error' });
        },
      }
    );
  });
  return (
    <div>
      <Dialog
        open={openDialog}
        setOpen={setOpenDialog}
        titleButton="Create"
        titleDialog="Create categories"
        size="xxl"
        children={
          <FormCategories
            form={form}
            option={convertToOption(dataAllProduct.data?.data || [])}
            selected={selected}
            setSelected={setSelected}
          />
        }
        description="Please fill filed required"
        onClick={() => {
          onSubmit();
        }}
      />
    </div>
  );
};

export default AddCategories;
