import { Root } from '@radix-ui/react-avatar';

import { cn } from '@/config/utils';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const AvatarCore = forwardRef<ComponentRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  )
);
AvatarCore.displayName = Root.displayName;

export default AvatarCore;
