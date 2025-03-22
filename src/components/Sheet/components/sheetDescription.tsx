import { cn } from '@/config/utils';
import { Description } from '@radix-ui/react-dialog';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const SheetDescription = forwardRef<ComponentRef<typeof Description>, ComponentPropsWithoutRef<typeof Description>>(
  ({ className, ...props }, ref) => (
    <Description
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
);
SheetDescription.displayName = Description.displayName;

export default SheetDescription;
