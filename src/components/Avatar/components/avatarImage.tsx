import { Image } from '@radix-ui/react-avatar';

import { cn } from '@/config/utils';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const AvatarImage = forwardRef<ComponentRef<typeof Image>, ComponentPropsWithoutRef<typeof Image>>(
  ({ className, ...props }, ref) => (
    <Image
      ref={ref}
      className={cn('aspect-square h-full w-full', className)}
      {...props}
    />
  )
);
AvatarImage.displayName = Image.displayName;

export default AvatarImage;
