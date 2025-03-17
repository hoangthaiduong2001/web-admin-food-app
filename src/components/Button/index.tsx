import { cn } from '@/config/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        text: 'text-black hover:bg-neutral-100 active:bg-neutral-300 disabled:text-gray-500',
        contained:
          'text-white bg-blue-400 shadow-sm hover:bg-blue-500 active:bg-blue-700 disabled:text-gray-600 disabled:bg-gray-300',
        destructive:
          'text-white bg-red-500 shadow-sm hover:bg-red-600 active:bg-red-700 disabled:text-gray-200 disabled:bg-red-400',
        success:
          'text-white bg-green-500 shadow-sm hover:bg-green-600 active:bg-green-700 disabled:text-gray-200 disabled:bg-green-400',
        outline:
          'border border-2 border-neutral-500 hover:border-neutral-600 text-neutral-600 outline-none active:bg-neutral-100 disabled:text-gray-600 disabled:bg-gray-300',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'text',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
