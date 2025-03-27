import { InferType, number, object, string } from 'yup';

export const ProductSchema = object({
  title: string().required('Title is required'),
  price: number().required('Price is required'),
  discount: number().optional(),
  desc: string().required('Description is required'),
  img: string().optional(),
});

export type ProductSchemaType = InferType<typeof ProductSchema>;
