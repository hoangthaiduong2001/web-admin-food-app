import { cn } from '@/config/utils';
import { forwardRef, HTMLAttributes } from 'react';

const CardCore = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('rounded-xl border bg-card text-card-foreground shadow', className)}
    {...props}
  />
));
CardCore.displayName = 'Card';

export default CardCore;
