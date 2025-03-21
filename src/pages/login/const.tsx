import { Button } from '@/components/Button';
import SortingColumn from '@/components/Table/components/sortingTable';
import { IItemTableContext } from '@/components/Table/type';
import { ColumnDef } from '@tanstack/react-table';
import { createContext } from 'react';
import { LoginSchemaType } from './schema';

export const defaultValueLogin: LoginSchemaType = {
  username: '',
  password: '',
};

export const columnsTable: ColumnDef<any>[] = [
  {
    accessorKey: 'number',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="ID"
      />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('number')}</div>,
    filterFn: (rows, columnId, filterValue) => {
      if (!filterValue) return true;
      return String(filterValue) === String(rows.getValue('number'));
    },
  },
  {
    accessorKey: 'capacity',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Capacity"
      />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('capacity')}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <div>{row.getValue('status')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    header: 'Action',
    size: 270,
    cell: function Actions({ row }) {
      // const { setItemIdEdit, setItemDelete } = useContext(TableContext);
      // const openEditTable = () => {
      //   setItemIdEdit(row.original.number);
      // };

      const handleSetSelect = () => {
        console.log('row', row.original);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <Button variant="contained">Edit</Button>
          <Button variant="destructive">Delete</Button>
        </div>
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <DotsHorizontalIcon className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //     <DropdownMenuSeparator />
        //     <DropdownMenuItem onClick={openEditTable}>Update</DropdownMenuItem>
        //     <DropdownMenuItem onClick={openDeleteTable}>
        //       Delete
        //     </DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>
      );
    },
  },
];

export const TableContext = createContext<IItemTableContext<any>>({
  itemIdEdit: undefined,
  itemDelete: null,
  setItemIdEdit: (value: number | undefined) => {},
  setItemDelete: (value: any | null) => {},
});
