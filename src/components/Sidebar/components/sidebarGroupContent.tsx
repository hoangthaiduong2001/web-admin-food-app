import { cn } from '@/config/utils';
import { ComponentProps, forwardRef } from 'react';

const SidebarGroupContent = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn(' flex flex-col w-full text-sm text-neutral-700', className)}
    {...props}
  />
));
SidebarGroupContent.displayName = 'SidebarGroupContent';

export default SidebarGroupContent;
