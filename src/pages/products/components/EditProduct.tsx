import { useUpdateProductMutation } from '@/apis/hooks/product';
import { useUploadImageMutation } from '@/apis/hooks/upload';
import Dialog from '@/components/Dialog';
import { showToast } from '@/components/Toast';
import { IProduct } from '@/types/product';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProductSchema, ProductSchemaType } from '../schema';
import FormProduct from './form';

const EditProduct = ({ product, onClick }: { product: IProduct; onClick: () => void }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const { mutate: updateProduct } = useUpdateProductMutation({ id: product._id });
  const { mutate: uploadImage } = useUploadImageMutation();
  const form = useForm<ProductSchemaType>({
    resolver: yupResolver(ProductSchema),
    values: {
      title: product.title || '',
      price: product.price || 0,
      discount: product.discount || 0,
      img: product.img || '',
      desc: product.desc || '',
    },
  });
  console.log('file', file);
  const { handleSubmit, reset } = form;
  const onSubmit = handleSubmit((data) => {
    if (product._id) {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        uploadImage(formData, {
          onSuccess: (dataImage) => {
            updateProduct(
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
        updateProduct(data, {
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
    } else {
      showToast({ message: 'Not found id', type: 'error' });
    }
  });

  return (
    <Dialog
      open={openDialog}
      setOpen={() => {
        setOpenDialog((prev) => !prev);
        onClick();
      }}
      variantButton="contained"
      titleButton="Update"
      titleDialog="Update product"
      size="xxl"
      children={
        <FormProduct
          form={form}
          img={product.img}
          onSubmit={onSubmit}
          setFile={setFile}
        />
      }
      description="Please fill filed required"
      onClick={() => {
        onSubmit();
      }}
    />
  );
};

export default EditProduct;
