import { Option } from '@/components/MultipleSelect/type';
import { UseFormReturn } from 'react-hook-form';
import { CategoriesSchemaType } from './schema';

export type TFormInstanceCategories = {
  selected?: Option[];
  setSelected?: (value: Option[]) => void;
  option?: Option[];
  form: UseFormReturn<CategoriesSchemaType>;
};
