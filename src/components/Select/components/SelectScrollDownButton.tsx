import { cn } from '@/config/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const SelectScrollDownButton = forwardRef<
  ComponentRef<typeof SelectPrimitive.ScrollDownButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <FaChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

export default SelectScrollDownButton;
