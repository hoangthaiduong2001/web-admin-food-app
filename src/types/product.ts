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

export interface ProductResType {
  total: number;
  data: IProduct[];
}
