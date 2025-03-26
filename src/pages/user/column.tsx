import SortingColumn from '@/components/Table/components/sortingTable';
import { IUser } from '@/types/user';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import DeleteUser from './components/DeleteUser';
import EditUser from './components/EditUser';

export const userColumns: ColumnDef<IUser>[] = [
  {
    accessorKey: '_id',
    header: 'ID',
    cell: ({ row }) => <div className="capitalize">{row.getValue('_id')}</div>,
  },
  {
    accessorKey: 'username',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Username"
      />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('username')}</div>,
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Address"
      />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('address')}</div>,
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Phone"
      />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('phone')}</div>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Email"
      />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('email')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    header: 'Action',
    size: 270,
    cell: function Actions({ row }) {
      const [id, setId] = useState('');
      const handleSetSelect = () => {
        setId(row.original._id);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <EditUser
            id={id}
            onClick={handleSetSelect}
          />
          <DeleteUser
            id={id}
            onClick={handleSetSelect}
          />
        </div>
      );
    },
  },
];
