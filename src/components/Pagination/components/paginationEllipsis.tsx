import { cn } from '@/config/utils';
import { ComponentProps } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const PaginationEllipsis = ({ className, ...props }: ComponentProps<'span'>) => (
  <span
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <HiOutlineDotsHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export default PaginationEllipsis;
