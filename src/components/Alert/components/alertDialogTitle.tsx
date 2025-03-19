import { cn } from '@/config/utils';
import { Title } from '@radix-ui/react-alert-dialog';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const AlertDialogTitle = forwardRef<ComponentRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  )
);
AlertDialogTitle.displayName = Title.displayName;

export default AlertDialogTitle;
