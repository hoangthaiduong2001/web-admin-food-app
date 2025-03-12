import { cn } from '@/config/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { FaChevronUp } from 'react-icons/fa6';

const SelectScrollUpButton = forwardRef<
  ComponentRef<typeof SelectPrimitive.ScrollUpButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <FaChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

export default SelectScrollUpButton;
