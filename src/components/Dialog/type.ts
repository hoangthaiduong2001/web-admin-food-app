import { ReactNode } from 'react';

export interface IDialog {
  titleDialog: string;
  children: ReactNode;
  titleButton: string;
  description: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  onClick: () => void;
}
