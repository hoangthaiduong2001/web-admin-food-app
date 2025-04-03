import { InferType, object, string } from 'yup';

export const CategoriesSchema = object({
  name: string().required('Name is required'),
});

export type CategoriesSchemaType = InferType<typeof CategoriesSchema>;
