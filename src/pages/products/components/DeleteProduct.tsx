import { useDeleteProductMutation } from '@/apis/hooks/product';
import Alert from '@/components/Alert';
import { showToast } from '@/components/Toast';
import { IProduct } from '@/types/product';
import { useState } from 'react';

const DeleteProduct = ({ product, onClick }: { product: IProduct; onClick: () => void }) => {
  const [openAlter, setOpenAlter] = useState<boolean>(false);
  const { mutate: deleteUser } = useDeleteProductMutation();
  const onSubmit = (id: string) => {
    if (id) {
      deleteUser(id, {
        onSuccess: (data) => {
          showToast({ message: data.message, type: 'success' });
          setOpenAlter(false);
        },
        onError: (error) => {
          showToast({ message: error.message, type: 'error' });
        },
      });
    } else {
      showToast({ message: 'Not found id', type: 'error' });
    }
  };
  return (
    <Alert
      description={
        <>
          Are you sure you want to delete this product:
          <span className="font-bold"> {product.title}?</span>
        </>
      }
      variantTile="destructive"
      variantSubmit="destructive"
      onClick={() => onSubmit(product._id)}
      open={openAlter}
      setOpen={() => {
        setOpenAlter((prev) => !prev);
        onClick();
      }}
      titleAlter="Delete product"
      titleButton="Delete"
    />
  );
};

export default DeleteProduct;
