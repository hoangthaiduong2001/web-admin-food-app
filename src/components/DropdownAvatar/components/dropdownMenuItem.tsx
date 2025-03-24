import { cn } from '@/config/utils';
import { Item } from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const DropdownMenuItem = forwardRef<
  ComponentRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      'relative flex cursor-pointer hover:bg-white select-none mt-2 items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = Item.displayName;

export default DropdownMenuItem;
