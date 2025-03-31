export interface ProductCart {
  productId: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  img: string;
}

export interface ICart {
  _id: string;
  userId: string;
  username: string;
  cart: ProductCart[];
}

export interface CartResType {
  message: string;
  data: ICart[];
}

export interface CartByIdResType {
  message: string;
  data: ICart;
}

export interface EditCartBodyType {
  userId: string;
  productId: string;
  quantity: number;
}

export interface EditCartResType {
  message: string;
}
