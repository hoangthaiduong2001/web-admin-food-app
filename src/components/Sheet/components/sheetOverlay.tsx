import { cn } from '@/config/utils';
import { Overlay } from '@radix-ui/react-dialog';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const SheetOverlay = forwardRef<ComponentRef<typeof Overlay>, ComponentPropsWithoutRef<typeof Overlay>>(
  ({ className, ...props }, ref) => (
    <Overlay
      className={cn(
        'fixed inset-0 z-50  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
      ref={ref}
    />
  )
);
SheetOverlay.displayName = Overlay.displayName;

export default SheetOverlay;
