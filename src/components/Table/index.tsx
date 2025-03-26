import {
  TableBody,
  TableCell,
  Table as TableCore,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table/components/TableUI';
import { IPlainObject } from '@/types/common';
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from '../Input';
import PaginationTable from '../Pagination';
import TableSkeleton from '../Skeleton';

import Select from '../Select';
import { PAGE_SIZE } from './const';
import { TTableProps } from './type';

const Table = <TRowDataType extends IPlainObject>({
  data,
  columns,
  AddItem,
  isLink = false,
  pathname = '/',
  isPending,
  selectFilter,
  onChoose,
}: TTableProps<TRowDataType>) => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const pageIndex = page - 1;
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex,
    pageSize: PAGE_SIZE,
  });
  const { items, onChange, placeholder, value } = selectFilter;

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    autoResetPageIndex: false,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  useEffect(() => {
    table.setPagination({
      pageIndex,
      pageSize: PAGE_SIZE,
    });
  }, [table, pageIndex]);

  return (
    <div className="w-full">
      <div className="flex py-4">
        <div className="flex items-center justify-center gap-2 w-1/2">
          <Select
            placeholder={placeholder}
            items={items}
            value={value}
            onChange={onChange}
            className="w-1/3"
          />
          <Input
            placeholder={`Filter by ${value}`}
            value={(table.getColumn(value)?.getFilterValue() as string) ?? ''}
            onChange={(e) => table.getColumn(value)?.setFilterValue(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="ml-auto flex items-center gap-2">{<AddItem />}</div>
      </div>
      {isPending ? (
        <TableSkeleton />
      ) : (
        <div className="rounded-md shadow overflow-hidden">
          <TableCore>
            <TableHeader className="top-0 sticky">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className={`overflow-y-scroll ${table.getRowModel().rows?.length ? 'h-fit' : 'h-[50vh]'}`}>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    onClick={() => onChoose?.(row.original)}
                    className="hover:bg-neutral-100"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </TableCore>
        </div>
      )}
      <div className="flex items-center justify-between space-x-2 pt-2">
        <div className="text-xs text-muted-foreground">
          Display <strong>{table.getPaginationRowModel().rows.length}</strong> in <strong>{data.length}</strong> result
        </div>
        <div>
          <PaginationTable
            page={table.getState().pagination.pageIndex + 1}
            pageSize={table.getPageCount()}
            pathname={pathname}
            isLink={isLink}
            onClick={(pageNumber) =>
              isLink &&
              table.setPagination({
                pageIndex: pageNumber - 1,
                pageSize: PAGE_SIZE,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
