import { useDeleteCategoriesDetailMutation } from '@/apis/hooks/categories';
import Alert from '@/components/Alert';
import { showToast } from '@/components/Toast';
import { IProductCategories } from '@/types/categories';
import { useState } from 'react';

const DeleteDetailCategories = ({
  categoriesId,
  product,
  onClick,
  setOpenDialog,
}: {
  categoriesId: string;
  product: IProductCategories;
  onClick: () => void;
  setOpenDialog: (value: boolean) => void;
}) => {
  const [openAlter, setOpenAlter] = useState<boolean>(false);
  const { mutate: deleteDetailCategories } = useDeleteCategoriesDetailMutation({ categoriesId });
  const onSubmit = (id: string) => {
    if (id) {
      deleteDetailCategories(id, {
        onSuccess: (data) => {
          showToast({ message: data.message, type: 'success' });
          setOpenAlter(false);
          setOpenDialog(false);
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
          Are you sure you want to delete this product of categories:
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
      titleAlter="Delete categories"
      titleButton="Delete"
    />
  );
};

export default DeleteDetailCategories;
