import { cn } from '@/config/utils';
import { ComponentProps, forwardRef } from 'react';

const SidebarMenuItem = forwardRef<HTMLLIElement, ComponentProps<'li'>>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn('group/menu-item relative', className)}
    {...props}
  />
));
SidebarMenuItem.displayName = 'SidebarMenuItem';

export default SidebarMenuItem;
