import { cn } from '@/config/utils';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const DropdownMenuSeparator = forwardRef<ComponentRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
  ({ className, ...props }, ref) => (
    <Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...props}
    />
  )
);
DropdownMenuSeparator.displayName = Separator.displayName;

export default DropdownMenuSeparator;
