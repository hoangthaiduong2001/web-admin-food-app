import SheetContent from '@/components/Sheet/components/sheetContent';
import SheetDescription from '@/components/Sheet/components/sheetDescription';
import SheetHeader from '@/components/Sheet/components/sheetHeader';
import SheetTitle from '@/components/Sheet/components/sheetTitle';
import { cn } from '@/config/utils';
import useSidebar from '@/hooks/useSidebar';
import { Root } from '@radix-ui/react-dialog';
import { ComponentProps, forwardRef } from 'react';

const Sidebar = forwardRef<
  HTMLDivElement,
  ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
  }
>(({ side = 'left', variant = 'sidebar', collapsible = 'offcanvas', className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  const isCollapsed = state === 'collapsed';
  if (collapsible === 'none') {
    return (
      <div
        className={cn('flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Root
        open={openMobile}
        onOpenChange={setOpenMobile}
        {...props}
      >
        <SheetContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              '--sidebar-width': '18rem',
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Root>
    );
  }

  return (
    <div
      ref={ref}
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          `relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear`,
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
            : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
        )}
      />
      <div
        className={cn(
          `inset-y-0 z-10 hidden h-svh transition delay-150 duration-300 ${
            isCollapsed ? 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]' : 'w-[--sidebar-width]'
          } transition-[left,right,width] duration-200 ease-linear md:flex`,
          side === 'left'
            ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
            : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
        >
          {children}
        </div>
      </div>
    </div>
  );
});
Sidebar.displayName = 'Sidebar';

export default Sidebar;
