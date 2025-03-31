import { InferType, object, string } from 'yup';

export const CartSchema = object({
  username: string(),
  productName: string(),
  quantity: string(),
});

export type CartSchemaType = InferType<typeof CartSchema>;
