import { Option } from '@/components/MultipleSelect/type';
import { ItemSelect } from '@/components/Select/type';

export type TOrderBody = {
  productId: string;
  quantity: number;
};

export type TFormInstanceOrder = {
  items: ItemSelect[];
  setSelectUser: (value: string) => void;
  selectUser: string;
  optionProduct: Option[];
  setOptionProduct?: (value: Option[]) => void;
  option: Option[];
  orders: TOrderBody[];
  setOrders: (value: TOrderBody[]) => void;
};
