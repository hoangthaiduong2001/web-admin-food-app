import { ItemSelect } from '@/components/Select/type';
import { PaymentOrder, StatusOrder } from '@/types/common';
import { IOrderResType } from '@/types/order';

export const filterOrder: ItemSelect[] = [
  {
    label: 'Customer',
    value: 'customer',
  },
  {
    label: 'Address',
    value: 'address',
  },
  {
    label: 'Total',
    value: 'total',
  },
  {
    label: 'Status',
    value: 'status',
  },
  {
    label: 'Payment',
    value: 'payment',
  },
];

export const filterOrderDetail: ItemSelect[] = [
  {
    label: 'Title',
    value: 'title',
  },
  {
    label: 'Price',
    value: 'price',
  },
  {
    label: 'Discount',
    value: 'discount',
  },
  {
    label: 'Quantity',
    value: 'quantity',
  },
];

export const itemsPayment: ItemSelect[] = [
  {
    label: 'Paid',
    value: PaymentOrder.Paid,
  },
  {
    label: 'Unpaid',
    value: PaymentOrder.Unpaid,
  },
];

export const itemsStatus: ItemSelect[] = [
  {
    label: 'Waiting',
    value: StatusOrder.Waiting,
  },
  {
    label: 'Delivered',
    value: StatusOrder.Delivered,
  },
];

export const defaultValueOrder: IOrderResType = {
  _id: '',
  customer: { _id: '', username: '', address: '' },
  total: 0,
  status: StatusOrder.Waiting,
  payment: PaymentOrder.Unpaid,
  products: [],
};
