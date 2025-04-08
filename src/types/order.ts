import { PaymentOrder, StatusOrder } from './common';

export interface IProductOrderDetail {
  _id: string;
  title: string;
  price: number;
  discount: number;
  img: string;
}

export interface IProductOrder {
  _id: string;
  quantity: number;
  product: IProductOrderDetail;
}

export interface IUserOrder {
  _id: string;
  username: string;
  address: string;
}

export interface IOrderResType {
  _id: string;
  customer: IUserOrder;
  total: number;
  status: StatusOrder;
  payment: PaymentOrder;
  products: IProductOrder[];
}
export interface OrderResType {
  data: IOrderResType[];
  count: number;
}

// export interface CategoriesResType {
//   message: string;
//   data: ICategoriesResType[];
// }

export interface CreateOrderBodyType {
  customer: string;
  products: {
    product: string;
    quantity: number;
  }[];
}

export interface CreateOrderResType {
  message: string;
}

// export interface GetByIdCategoriesResType {
//   message: string;
//   data: ICategoriesResType;
// }

// export interface UpdateCategoriesBodyType {
//   name: string;
// }

// export interface UpdateCategoriesResType {
//   message: string;
// }

// export interface DeleteCategoriesResType {
//   message: string;
// }
