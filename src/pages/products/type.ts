import { BaseSyntheticEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ProductSchemaType } from './schema';

export type TFormInstanceProduct = {
  setFile: (file: File | null) => void;
  img?: string;
  form: UseFormReturn<ProductSchemaType>;
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
};
