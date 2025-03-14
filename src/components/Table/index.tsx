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

import { PAGE_SIZE } from './const';
import { IItemTableContext, TTableProps } from './type';

const Table = <TRowDataType extends IPlainObject, TRowDataSort extends IPlainObject = object[]>({
  data,
  columns,
  tableContext,
  mutationItem,
  AddItem,
  EditItem,
  name,
  isLink = false,
  pathname = '/',
  filterName,
  deleteById = true,
  queryListItem,
  tableListSortedByNumber,
  onChoose,
}: TTableProps<TRowDataType, TRowDataSort>) => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const pageIndex = page - 1;
  const [itemIdEdit, setItemIdEdit] = useState<number | undefined>();
  const [itemDelete, setItemDelete] = useState<IPlainObject | null>(null);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex,
    pageSize: PAGE_SIZE,
  });

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
    <tableContext.Provider
      value={
        {
          itemIdEdit,
          itemDelete,
          setItemDelete,
          setItemIdEdit,
        } as IItemTableContext<TRowDataType>
      }
    >
      <div className="w-full">
        <EditItem
          id={itemIdEdit}
          setId={setItemIdEdit}
        />
        <div className="flex items-center py-4">
          <Input
            placeholder={`Filter ${filterName}`}
            value={(table.getColumn(filterName)?.getFilterValue() as string) ?? ''}
            onChange={(e) => table.getColumn(filterName)?.setFilterValue(e.target.value)}
            className="max-w-sm"
          />
          <div className="ml-auto flex items-center gap-2">{<AddItem />}</div>
        </div>
        {queryListItem?.isPending ? (
          <TableSkeleton />
        ) : (
          <div className="rounded-md border">
            <TableCore>
              <TableHeader className="top-0 sticky bg-background">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody className="overflow-y-scroll max-h-[70vh]">
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && 'selected'}
                      onClick={() => onChoose?.(row.original)}
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
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </TableCore>
          </div>
        )}
        <div className="flex items-center justify-end space-x-2 pt-4">
          <div className="text-xs text-muted-foreground py-4 flex-1 ">
            Display <strong>{table.getPaginationRowModel().rows.length}</strong> in <strong>{data.length}</strong>{' '}
            result
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
    </tableContext.Provider>
  );
};

export default Table;
