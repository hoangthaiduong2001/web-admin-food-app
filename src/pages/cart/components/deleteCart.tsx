import { useDeleteCartMutation } from '@/apis/hooks/cart';
import Alert from '@/components/Alert';
import { showToast } from '@/components/Toast';
import { ICart } from '@/types/cart';
import { useState } from 'react';

const DeleteCart = ({ cart, onClick }: { cart: ICart; onClick: () => void }) => {
  const [openAlter, setOpenAlter] = useState<boolean>(false);
  const { mutate: deleteCart } = useDeleteCartMutation();
  const onSubmit = (id: string) => {
    if (id) {
      deleteCart(id, {
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
          Are you sure you want to delete this cart of user:
          <span className="font-bold"> {cart.username}?</span>
        </>
      }
      variantTile="destructive"
      variantSubmit="destructive"
      onClick={() => onSubmit(cart._id)}
      open={openAlter}
      setOpen={() => {
        setOpenAlter((prev) => !prev);
        onClick();
      }}
      titleAlter="Delete cart"
      titleButton="Delete"
    />
  );
};

export default DeleteCart;
