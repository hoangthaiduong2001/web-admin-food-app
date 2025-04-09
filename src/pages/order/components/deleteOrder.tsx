import { useDeleteOrderMutation } from '@/apis/hooks/order';
import Alert from '@/components/Alert';
import { showToast } from '@/components/Toast';
import { IOrderResType } from '@/types/order';
import { useState } from 'react';

const DeleteOrder = ({ order, onClick }: { order: IOrderResType; onClick: () => void }) => {
  const [openAlter, setOpenAlter] = useState<boolean>(false);
  const { mutate: deleteOrder } = useDeleteOrderMutation();
  const onSubmit = (id: string) => {
    if (id) {
      deleteOrder(id, {
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
          Are you sure you want to delete this order of user:
          <span className="font-bold"> {order.customer.username}?</span>
        </>
      }
      variantTile="destructive"
      variantSubmit="destructive"
      onClick={() => onSubmit(order._id)}
      open={openAlter}
      setOpen={() => {
        setOpenAlter((prev) => !prev);
        onClick();
      }}
      titleAlter="Delete order"
      titleButton="Delete"
    />
  );
};

export default DeleteOrder;
