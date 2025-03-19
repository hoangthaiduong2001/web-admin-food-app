import { buttonVariants } from '@/components/Button';
import { cn } from '@/config/utils';
import { Cancel } from '@radix-ui/react-alert-dialog';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const AlertDialogCancel = forwardRef<ComponentRef<typeof Cancel>, ComponentPropsWithoutRef<typeof Cancel>>(
  ({ className, ...props }, ref) => (
    <Cancel
      ref={ref}
      className={cn(buttonVariants({ variant: 'text' }), 'mt-2 sm:mt-0', className)}
      {...props}
    />
  )
);
AlertDialogCancel.displayName = Cancel.displayName;

export default AlertDialogCancel;
