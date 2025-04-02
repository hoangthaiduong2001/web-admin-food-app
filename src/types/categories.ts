export interface IProductCategories {
  _id: string;
  title: string;
  price: number;
  discount: number;
  img: string;
}

export interface IListProductCategories {
  _id: string;
  product: IProductCategories;
}

export interface ICategoriesResType {
  _id: string;
  name: string;
  products: IListProductCategories[];
}

export interface CategoriesResType {
  message: string;
  data: ICategoriesResType[];
}

export interface CreateCategoriesBodyType {
  name: string;
  products: {
    product: string[];
  };
}

export interface CreateCategoriesResType {
  message: string;
  data: ICategoriesResType;
}

export interface GetByIdCategoriesResType {
  message: string;
  data: ICategoriesResType;
}

export interface UpdateCategoriesBodyType {
  name: string;
}

export interface UpdateCategoriesResType {
  message: string;
}

export interface DeleteCategoriesResType {
  message: string;
}
