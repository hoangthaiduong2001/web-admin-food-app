import { IItemTableContext } from '@/components/Table/type';
import { ColumnDef } from '@tanstack/react-table';
import { createContext } from 'react';

export const columnsTable: ColumnDef<any>[] = [
  {
    accessorKey: 'number',
    header: 'ID',
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue('number')}</div>,
    filterFn: (rows, columnId, filterValue) => {
      if (!filterValue) return true;
      return String(filterValue) === String(rows.getValue('number'));
    },
  },
  {
    accessorKey: 'capacity',
    header: 'Capacity',
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue('capacity')}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <div className="text-center">{row.getValue('status')}</div>,
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: function Actions({ row }) {
  //     const { setItemIdEdit, setItemDelete } = useContext(TableContext);
  //     const openEditTable = () => {
  //       setItemIdEdit(row.original.number);
  //     };

  //     const openDeleteTable = () => {
  //       setItemDelete?.(row.original);
  //     };
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <DotsHorizontalIcon className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem onClick={openEditTable}>Update</DropdownMenuItem>
  //           <DropdownMenuItem onClick={openDeleteTable}>
  //             Delete
  //           </DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];

export const TableContext = createContext<IItemTableContext<any>>({
  itemIdEdit: undefined,
  itemDelete: null,
  setItemIdEdit: (value: number | undefined) => {},
  setItemDelete: (value: any | null) => {},
});
