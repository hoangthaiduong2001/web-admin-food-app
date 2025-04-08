import { useCreateOrderMutation } from '@/apis/hooks/order';
import { useGetAllProduct } from '@/apis/hooks/product';
import { useGetAllUser } from '@/apis/hooks/user';
import Dialog from '@/components/Dialog';
import { Option } from '@/components/MultipleSelect/type';
import { IProduct } from '@/types/product';
import { IUser } from '@/types/user';
import { useState } from 'react';
import { TOrderBody } from '../type';
import FormOrder from './form';

const AddOrder = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectUser, setSelectUser] = useState<string>('');
  const [selectProduct, setSelectProduct] = useState<Option[]>([]);
  const [orders, setOrders] = useState<TOrderBody[]>([]);
  const { mutate: createOrder } = useCreateOrderMutation();
  const dataAllUser = useGetAllUser();
  const dataAllProduct = useGetAllProduct();
  const items = (data: IUser[]): Option[] => {
    return (
      data.map((item) => ({
        label: item.username,
        value: item._id,
      })) || []
    );
  };
  const option = (data: IProduct[]): Option[] => {
    return (
      data.map((item) => ({
        label: item.title,
        value: item._id,
      })) || []
    );
  };

  const onSubmit = () => {
    console.log('orders', orders);
  };
  return (
    <div>
      <Dialog
        open={openDialog}
        setOpen={setOpenDialog}
        titleButton="Create"
        titleDialog="Create order"
        size="xxl"
        children={
          <FormOrder
            items={items(dataAllUser.data?.data || [])}
            selectUser={selectUser}
            setSelectUser={setSelectUser}
            option={option(dataAllProduct.data?.data || [])}
            optionProduct={selectProduct}
            setOptionProduct={setSelectProduct}
            orders={orders}
            setOrders={setOrders}
          />
        }
        onClick={() => {
          onSubmit();
        }}
      />
    </div>
  );
};

export default AddOrder;
