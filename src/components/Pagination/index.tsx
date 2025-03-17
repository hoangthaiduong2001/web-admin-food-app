import { cn } from '@/config/utils';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Button } from '../Button';
import Pagination from './components/pagination';
import PaginationContent from './components/paginationContent';
import PaginationEllipsis from './components/paginationEllipsis';
import PaginationItem from './components/paginationItem';
import PaginationLink from './components/paginationLink';
import PaginationNext from './components/paginationNext';
import PaginationPrevious from './components/paginationPrevious';
import { IPaginationTable } from './type';

const RANGE = 2;
export default function PaginationTable({
  page,
  pageSize,
  pathname = '/',
  isLink = true,
  onClick = (pageNumber) => {},
}: IPaginationTable) {
  const renderPagination = () => {
    let dotAfter = false;
    let dotBefore = false;
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true;
        return (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      return null;
    };
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true;
        return (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      return null;
    };
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;
        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index);
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index);
          } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
            return renderDotAfter(index);
          }
        } else if (page >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page - RANGE) {
          return renderDotBefore(index);
        }
        return (
          <PaginationItem key={index}>
            {!isLink ? (
              <PaginationLink
                to={{
                  pathname,
                  search: `?page=${pageNumber}`,
                }}
                isActive={pageNumber === page}
              >
                {pageNumber}
              </PaginationLink>
            ) : (
              <Button
                className="w-9 h-9 p-0"
                onClick={() => {
                  onClick(pageNumber);
                }}
                variant={pageNumber === page ? 'contained' : 'outline'}
              >
                {pageNumber}
              </Button>
            )}
          </PaginationItem>
        );
      });
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {!isLink ? (
            <PaginationPrevious
              to={{
                pathname,
                search: `?page=${page - 1}`,
              }}
              className={cn({
                'cursor-not-allowed': page === 1,
              })}
              onClick={(e) => {
                if (page === 1) {
                  e.preventDefault();
                }
              }}
            />
          ) : (
            <Button
              size="sm"
              disabled={page === 1}
              className="h-9 w-9 p-0"
              variant="text"
              onClick={() => {
                onClick(page - 1);
              }}
            >
              <FaChevronLeft className="w-5 h-5" />
            </Button>
          )}
        </PaginationItem>
        {renderPagination()}

        <PaginationItem>
          {!isLink ? (
            <PaginationNext
              to={{
                pathname,
                search: `?page=${page + 1}`,
              }}
              className={cn({
                'cursor-not-allowed': page === pageSize,
              })}
              onClick={(e) => {
                if (page === pageSize) {
                  e.preventDefault();
                }
              }}
            />
          ) : (
            <Button
              size="sm"
              disabled={page === pageSize}
              className="h-9 w-9 p-0"
              variant="text"
              onClick={() => {
                onClick(page + 1);
              }}
            >
              <FaChevronRight className="w-5 h-5" />
            </Button>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
