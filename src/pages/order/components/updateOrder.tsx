import { useUpdateOrderMutation } from '@/apis/hooks/order';
import Dialog from '@/components/Dialog';
import Select from '@/components/Select';
import { showToast } from '@/components/Toast';
import { PaymentOrder, StatusOrder } from '@/types/common';
import { useState } from 'react';
import { itemsPayment, itemsStatus } from '../const';

const UpdateOrder = ({
  id,
  status,
  payment,
  onClick,
}: {
  id: string;
  status: StatusOrder;
  payment: PaymentOrder;
  onClick: () => void;
}) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectPayment, setSelectPayment] = useState<PaymentOrder>(payment);
  const [selectStatus, setSelectStatus] = useState<StatusOrder>(status);
  const { mutate: updateOrder } = useUpdateOrderMutation({ id });

  const onSubmit = () => {
    updateOrder(
      { payment: selectPayment, status: selectStatus },
      {
        onSuccess: (data) => {
          showToast({ message: data.message, type: 'success' });
          setOpenDialog(false);
        },
        onError: (error) => {
          showToast({ message: error.message, type: 'error' });
        },
      }
    );
  };
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
        titleDialog="Update order"
        size="xxl"
        children={
          <div>
            <Select
              label="Select payment"
              placeholder="Filter"
              items={itemsPayment}
              value={selectPayment}
              onChange={(value) => setSelectPayment(value as PaymentOrder)}
              className="w-full mb-2"
              classNameContent="h-[20vh]"
            />
            <Select
              label="Select status"
              placeholder="Filter"
              items={itemsStatus}
              value={selectStatus}
              onChange={(value) => setSelectStatus(value as StatusOrder)}
              className="w-full mb-2"
              classNameContent="h-[20vh]"
            />
          </div>
        }
        onClick={() => {
          onSubmit();
        }}
      />
    </div>
  );
};

export default UpdateOrder;
