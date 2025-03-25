import { ReactNode } from 'react';
import { variantButton } from '../Button/type';

export interface IAlter {
  titleAlter: string;
  titleButton: string | ReactNode;
  description: string;
  variantTile?: variantButton;
  variantSubmit?: variantButton;
  open: boolean;
  setOpen: (value: boolean) => void;
  onClick: () => void;
}
