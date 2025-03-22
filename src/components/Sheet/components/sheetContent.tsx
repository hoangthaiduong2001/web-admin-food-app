import { cn } from '@/config/utils';
import { Close, Content, Portal } from '@radix-ui/react-dialog';
import { ComponentRef, forwardRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { sheetVariants } from '../const';
import { SheetContentProps } from '../type';
import SheetOverlay from './sheetOverlay';

const SheetContent = forwardRef<ComponentRef<typeof Content>, SheetContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => (
    <Portal>
      <SheetOverlay />
      <Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <IoClose className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Close>
        {children}
      </Content>
    </Portal>
  )
);
SheetContent.displayName = Content.displayName;

export default SheetContent;
