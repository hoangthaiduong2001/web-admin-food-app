import { cn } from '@/config/utils';
import { Description } from '@radix-ui/react-alert-dialog';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const AlertDialogDescription = forwardRef<
  ComponentRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
AlertDialogDescription.displayName = Description.displayName;

export default AlertDialogDescription;
