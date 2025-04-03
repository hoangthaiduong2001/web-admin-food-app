import { Option } from '@/components/MultipleSelect/type';
import { ItemSelect } from '@/components/Select/type';
import { ICategoriesResType, IProductCategories } from '@/types/categories';
import { CategoriesSchemaType } from './schema';

export const optionMultiple: Option[] = [
  { label: 'nextjs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Remix', value: 'remix' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember' },
  { label: 'Gatsby', value: 'gatsby' },
  { label: 'Astro', value: 'astro' },
];

export const filterCategories: ItemSelect[] = [
  {
    label: 'Name',
    value: 'name',
  },
];

export const filterCategoriesDetail: ItemSelect[] = [
  {
    label: 'Product name',
    value: 'title',
  },
  {
    label: 'Price',
    value: 'price',
  },
];

export const defaultCreateCategories: CategoriesSchemaType = {
  name: '',
};

export const initialProductCategories: ICategoriesResType = {
  _id: '',
  name: '',
  products: [],
};

export const initialDetailProductCategories: IProductCategories = {
  _id: '',
  discount: 0,
  price: 0,
  img: '',
  title: '',
};
