import { cn } from '@/config/utils';
import { ComponentProps, forwardRef } from 'react';

const SidebarMenu = forwardRef<HTMLUListElement, ComponentProps<'ul'>>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn('flex w-full min-w-0 flex-col gap-1', className)}
    {...props}
  />
));
SidebarMenu.displayName = 'SidebarMenu';

export default SidebarMenu;
