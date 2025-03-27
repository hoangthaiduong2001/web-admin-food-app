import { ReactNode } from 'react';
import { variantButton } from '../Button/type';

export interface IAlter {
  titleAlter: string;
  titleButton: string | ReactNode;
  description: string | ReactNode;
  variantTile?: variantButton;
  variantSubmit?: variantButton;
  classNameButton?: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  onClick: () => void;
}
