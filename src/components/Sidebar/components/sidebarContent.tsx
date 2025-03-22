import { cn } from '@/config/utils';
import { ComponentProps, forwardRef } from 'react';

const SidebarContent = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden bg-amber-400',
        className
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = 'SidebarContent';

export default SidebarContent;
