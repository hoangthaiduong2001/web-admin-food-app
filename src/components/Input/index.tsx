import { cn } from '@/config/utils';
import * as React from 'react';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    errorMessage?: string;
  }
>(
  (
    {
      className,
      type,
      disabled,
      startAdornment,
      endAdornment,
      errorMessage,
      readOnly,
      onChange,
      value,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <div className="relative flex items-center">
          {startAdornment && <span className="absolute left-3 w-4 h-4">{startAdornment}</span>}
          {endAdornment && <span className="absolute right-3 w-4 h-4">{endAdornment}</span>}
          <input
            type={type}
            className={cn(
              'flex h-9 w-full hover:ring-1 hover:outline-none break-normal rounded-md border bg-transparent px-3 py-1 text-base shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              errorMessage ? 'border-red-500 focus:outline-red-500 hover:ring-red-500' : 'border-input',
              startAdornment ? 'pl-8' : '',
              endAdornment ? 'pr-8' : '',
              className
            )}
            ref={ref}
            readOnly={readOnly}
            disabled={disabled}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
          />
        </div>
        <span className="text-red-500 flex text-sm">{errorMessage}</span>
      </div>
    );
  }
);
Input.displayName = 'Input';

export default Input;
