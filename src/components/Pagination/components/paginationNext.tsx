import { cn } from '@/config/utils';
import { ComponentProps } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import PaginationLink from './paginationLink';

const PaginationNext = ({ className, ...props }: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="sm"
    className={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <FaChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

export default PaginationNext;
