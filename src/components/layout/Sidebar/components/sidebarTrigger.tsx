import { Button } from '@/components/Button';
import { cn } from '@/config/utils';
import useSidebar from '@/hooks/useSidebar';
import { ComponentProps, ComponentRef, forwardRef } from 'react';
import { LuPanelLeftClose, LuPanelLeftOpen } from 'react-icons/lu';

const SidebarTrigger = forwardRef<ComponentRef<typeof Button>, ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar, state } = useSidebar();
    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="text"
        className={cn('p-1', className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        {state === 'collapsed' ? (
          <LuPanelLeftOpen style={{ width: 25, height: 25 }} />
        ) : (
          <LuPanelLeftClose style={{ width: 25, height: 25 }} />
        )}
      </Button>
    );
  }
);
SidebarTrigger.displayName = 'SidebarTrigger';

export default SidebarTrigger;
