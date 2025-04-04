import { ItemSelect } from '@/components/Select/type';
import { IReview } from '@/types/review';

export const filterReviewTable: ItemSelect[] = [
  {
    label: 'Product',
    value: 'product',
  },
  {
    label: 'Reviewer',
    value: 'reviewer',
  },
  {
    label: 'Content',
    value: 'content',
  },
  {
    label: 'Rating',
    value: 'rating',
  },
];

export const defaultReview: IReview = {
  _id: '',
  content: '',
  product: {
    _id: '',
    img: '',
    title: '',
  },
  reviewer: {
    _id: '',
    username: '',
  },
  rating: 0,
};
