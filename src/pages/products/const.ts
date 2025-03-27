import { ItemSelect } from '@/components/Select/type';
import { ProductSchemaType } from './schema';

export const filterProductTable: ItemSelect[] = [
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
    label: 'Description',
    value: 'desc',
  },
];

export const defaultCreateProduct: ProductSchemaType = {
  title: '',
  price: 0,
  discount: 0,
  desc: '',
};
