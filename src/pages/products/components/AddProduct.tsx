import { useCreateProductMutation } from '@/apis/hooks/product';
import { useUploadImageMutation } from '@/apis/hooks/upload';
import Dialog from '@/components/Dialog';
import { showToast } from '@/components/Toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { defaultCreateProduct } from '../const';
import { ProductSchema, ProductSchemaType } from '../schema';
import FormProduct from './form';

const AddProduct = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const { mutate: createProduct } = useCreateProductMutation();
  const { mutate: uploadImage } = useUploadImageMutation();
  const form = useForm<ProductSchemaType>({
    resolver: yupResolver(ProductSchema),
    defaultValues: defaultCreateProduct,
  });
  const { handleSubmit, reset } = form;
  const onSubmit = handleSubmit((data) => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      uploadImage(formData, {
        onSuccess: (dataImage) => {
          createProduct(
            { ...data, img: dataImage.image },
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
        },
        onError: (error) => {
          console.log('error', error);
          showToast({ message: error.message, type: 'error' });
        },
      });
    } else {
      createProduct(data, {
        onSuccess: (data) => {
          showToast({ message: data.message, type: 'success' });
          setOpenDialog(false);
          reset();
        },
        onError: (error) => {
          showToast({ message: error.message, type: 'error' });
        },
      });
    }
  });
  return (
    <div>
      <Dialog
        open={openDialog}
        setOpen={setOpenDialog}
        titleButton="Create"
        titleDialog="Create user"
        size="xxl"
        children={
          <FormProduct
            setFile={setFile}
            form={form}
            onSubmit={onSubmit}
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

export default AddProduct;
