import { Fallback } from '@radix-ui/react-avatar';

import { cn } from '@/config/utils';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const AvatarFallback = forwardRef<ComponentRef<typeof Fallback>, ComponentPropsWithoutRef<typeof Fallback>>(
  ({ className, ...props }, ref) => (
    <Fallback
      ref={ref}
      className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
      {...props}
    />
  )
);
AvatarFallback.displayName = Fallback.displayName;

export default AvatarFallback;
