import { Button } from '@/components/Button';
import { cn } from '@/config/utils';
import useSidebar from '@/hooks/useSidebar';
import { ComponentProps, ComponentRef, forwardRef } from 'react';
import { LuPanelLeftOpen } from 'react-icons/lu';

const SidebarTrigger = forwardRef<ComponentRef<typeof Button>, ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="contained"
        size="icon"
        className={cn('h-7 w-7', className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <LuPanelLeftOpen />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  }
);
SidebarTrigger.displayName = 'SidebarTrigger';

export default SidebarTrigger;
