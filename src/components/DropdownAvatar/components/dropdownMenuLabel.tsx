import { cn } from '@/config/utils';
import { Label } from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const DropdownMenuLabel = forwardRef<
  ComponentRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = Label.displayName;

export default DropdownMenuLabel;
