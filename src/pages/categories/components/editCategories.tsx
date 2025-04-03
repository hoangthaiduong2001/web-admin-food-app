import { useUpdateCategoriesMutation } from '@/apis/hooks/categories';
import Dialog from '@/components/Dialog';
import { showToast } from '@/components/Toast';
import { ICategoriesResType } from '@/types/categories';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CategoriesSchema, CategoriesSchemaType } from '../schema';
import FormCategories from './form';

const EditCategories = ({ product, onClick }: { product: ICategoriesResType; onClick: () => void }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { mutate: updateCategories } = useUpdateCategoriesMutation({ id: product._id });

  const form = useForm<CategoriesSchemaType>({
    resolver: yupResolver(CategoriesSchema),
    values: { name: product.name },
  });
  const { handleSubmit, reset } = form;
  const onSubmit = handleSubmit((data) => {
    updateCategories(
      { name: data.name },
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
        setOpen={() => {
          setOpenDialog((prev) => !prev);
          onClick();
        }}
        titleButton="Update"
        variantButton="contained"
        titleDialog="Update categories"
        size="xxl"
        children={<FormCategories form={form} />}
        description="Please fill filed required"
        onClick={() => {
          onSubmit();
        }}
      />
    </div>
  );
};

export default EditCategories;
