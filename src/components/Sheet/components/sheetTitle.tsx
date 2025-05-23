import { cn } from '@/config/utils';
import { Title } from '@radix-ui/react-dialog';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const SheetTitle = forwardRef<ComponentRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn('text-lg font-semibold text-foreground', className)}
      {...props}
    />
  )
);
SheetTitle.displayName = Title.displayName;

export default SheetTitle;
