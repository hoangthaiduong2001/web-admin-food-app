import { ReactNode } from 'react';

export interface ICard {
  className?: string;
  title?: string;
  content: ReactNode;
  icon?: ReactNode;
  footer?: ReactNode;
}
