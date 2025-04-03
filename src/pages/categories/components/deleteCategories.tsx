import { useDeleteCategoriesMutation } from '@/apis/hooks/categories';
import Alert from '@/components/Alert';
import { showToast } from '@/components/Toast';
import { ICategoriesResType } from '@/types/categories';
import { useState } from 'react';

const DeleteCategories = ({ product, onClick }: { product: ICategoriesResType; onClick: () => void }) => {
  const [openAlter, setOpenAlter] = useState<boolean>(false);
  const { mutate: deleteCategories } = useDeleteCategoriesMutation();
  const onSubmit = (id: string) => {
    if (id) {
      deleteCategories(id, {
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
          Are you sure you want to delete this categories:
          <span className="font-bold"> {product.name}?</span>
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
      titleAlter="Delete categories"
      titleButton="Delete"
    />
  );
};

export default DeleteCategories;
