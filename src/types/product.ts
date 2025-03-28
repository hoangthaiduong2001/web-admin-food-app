export interface IProduct {
  _id: string;
  title: string;
  price: number;
  discount: number;
  desc: string;
  img: string;
  reviews: string[];
  category: string[];
}

export interface GetAllProductResType {
  total: number;
  data: IProduct[];
}

export interface ProductBodyType {
  title: string;
  price: number;
  discount?: number;
  desc: string;
  img?: string | File;
}

export interface ProductResType {
  data: IProduct;
  message: string;
}

export interface DeleteProductResType {
  message: string;
}
