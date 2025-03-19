import { Column } from '@tanstack/react-table';
import { FaArrowDown, FaArrowsUpDown, FaArrowUp } from 'react-icons/fa6';

const SortingColumn = ({ column, label }: { column: Column<any, unknown>; label: string }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="flex items-center justify-center gap-1"
      >
        {label}
        <div>
          {column.getIsSorted() === 'asc' ? (
            <FaArrowUp
              width={3}
              height={3}
            />
          ) : column.getIsSorted() === 'desc' ? (
            <FaArrowDown
              width={3}
              height={3}
            />
          ) : (
            <FaArrowsUpDown
              width={3}
              height={3}
            />
          )}
        </div>
      </button>
    </div>
  );
};

export default SortingColumn;
