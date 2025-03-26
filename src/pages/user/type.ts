import { BaseSyntheticEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { UserSchemaType } from './schema';

export type TFormInstanceUser = {
  id?: string;
  form: UseFormReturn<UserSchemaType>;
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
};
