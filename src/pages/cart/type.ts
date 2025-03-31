import { ItemSelect } from '@/components/Select/type';
import { ICart } from '@/types/cart';

export type TFormInstanceCart = {
  cart: ICart;
  items: ItemSelect[];
};

export type TReturnFormCart = {
  productId: string;
  quantity: number;
};
