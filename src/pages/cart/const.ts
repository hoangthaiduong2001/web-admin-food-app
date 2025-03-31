import { ItemSelect } from '@/components/Select/type';
import { ICart, ProductCart } from '@/types/cart';

export const filterCartTable: ItemSelect[] = [
  {
    label: 'Username',
    value: 'username',
  },
];

export const filterCartByIdTable: ItemSelect[] = [
  {
    label: 'Product name',
    value: 'productName',
  },
  {
    label: 'Quantity',
    value: 'quantity',
  },
  {
    label: 'Total price',
    value: 'totalPrice',
  },
];

export const initialValueCartProduct: ProductCart[] = [
  {
    productId: '',
    img: '',
    productName: '',
    quantity: 0,
    totalPrice: 0,
  },
];

export const initialValueCart: ICart = {
  _id: '',
  userId: '',
  username: '',
  cart: [],
};
