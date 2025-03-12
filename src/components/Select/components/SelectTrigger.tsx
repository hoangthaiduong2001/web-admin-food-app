import { cn } from '@/config/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const SelectTrigger = forwardRef<
  ComponentRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-9 w-full cursor-pointer items-center justify-between whitespace-nowrap rounded-md border px-3 py-2 text-sm outline-none hover:ring-1 disabled:cursor-not-allowed disabled:opacity-50 disabled:ring-0',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <FaChevronDown className="h-4 w-4" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export default SelectTrigger;
