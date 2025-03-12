import { cn } from '@/config/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const SelectSeparator = forwardRef<
  ComponentRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export default SelectSeparator;
