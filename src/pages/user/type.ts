import { IUser } from '@/types/user';
import { BaseSyntheticEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { UserSchemaType } from './schema';

export type TFormInstanceUser = {
  user?: IUser;
  form: UseFormReturn<UserSchemaType>;
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
};
