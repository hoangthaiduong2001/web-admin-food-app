import { useUpdateCartMutation } from '@/apis/hooks/cart';
import Dialog from '@/components/Dialog';
import { ItemSelect } from '@/components/Select/type';
import { showToast } from '@/components/Toast';
import { ICart } from '@/types/cart';
import { useRef, useState } from 'react';
import { TReturnFormCart } from '../type';
import FormCart from './form';

const EditCart = ({ cart, onClick }: { cart: ICart; onClick: () => void }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { mutate: updateCart } = useUpdateCartMutation();
  const formRef = useRef<{ getValues: () => TReturnFormCart } | null>(null);
  const handleUpdate = () => {
    if (formRef.current) {
      updateCart(
        {
          userId: cart.userId,
          productId: formRef.current.getValues().productId,
          quantity: formRef.current.getValues().quantity,
        },
        {
          onSuccess: (data) => {
            showToast({ message: data.message, type: 'success' });
          },
          onError: (error) => {
            showToast({ message: error.message, type: 'error' });
          },
        }
      );
    }
  };
  const handleArrayToObject = (data: ICart): ItemSelect[] => {
    return data.cart.map((item) => ({
      label: item.productName,
      value: item.productId.toString(),
    }));
  };

  return (
    <Dialog
      open={openDialog}
      setOpen={() => {
        setOpenDialog((prev) => !prev);
        onClick();
      }}
      variantButton="contained"
      titleButton="Edit"
      titleDialog="Edit cart"
      size="xxl"
      children={
        <FormCart
          ref={formRef}
          cart={cart}
          items={handleArrayToObject(cart)}
        />
      }
      onClick={() => {
        handleUpdate();
        setOpenDialog(false);
      }}
    />
  );
};

export default EditCart;
