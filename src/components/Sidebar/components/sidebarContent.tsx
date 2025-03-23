import { cn } from '@/config/utils';
import useSidebar from '@/hooks/useSidebar';
import { ComponentProps, forwardRef } from 'react';

const SidebarContent = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, ...props }, ref) => {
  const { state } = useSidebar();
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        `flex min-h-0 ${
          state === 'collapsed' ? 'duration-300 ease-linear pr-0' : 'duration-200 ease-linear pr-10'
        } flex-1 gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden border-neutral-200 border-r-2 bg-neutral-50`,
        className
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = 'SidebarContent';

export default SidebarContent;
