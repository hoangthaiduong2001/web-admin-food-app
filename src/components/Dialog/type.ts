import { sizeComponent } from '@/types/common';
import { ReactNode } from 'react';
import { variantButton } from '../Button/type';

export interface IDialog {
  titleDialog: string;
  children: ReactNode;
  titleButton: string;
  description?: string;
  variantButton?: variantButton;
  showButtonSubmit?: boolean;
  size?: keyof typeof sizeComponent;
  open: boolean;
  setOpen: (value: boolean) => void;
  onClick?: () => void;
}
