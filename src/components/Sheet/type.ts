import { Content } from '@radix-ui/react-dialog';
import { type VariantProps } from 'class-variance-authority';
import { sheetVariants } from './const';

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof Content>,
    VariantProps<typeof sheetVariants> {}

export interface ISheet {
  title: string;
  titleButton: string;
  description: string;
}
