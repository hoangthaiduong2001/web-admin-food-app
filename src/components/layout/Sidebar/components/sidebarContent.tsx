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
        `flex min-h-0 will-change-[padding,transform] transition-all duration-200 ease-linear ${
          state === 'collapsed' ? 'pr-0 overflow-hidden' : 'pr-10 overflow-auto'
        } flex-1 gap-2 border-neutral-200 border-r-2 bg-neutral-50`,
        className
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = 'SidebarContent';

export default SidebarContent;
