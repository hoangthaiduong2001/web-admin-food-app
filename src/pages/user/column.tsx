import SortingColumn from '@/components/Table/components/sortingTable';
import { IUser } from '@/types/user';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import DeleteUser from './components/DeleteUser';
import EditUser from './components/EditUser';
import { defaultValueUser } from './const';

export const userColumns: ColumnDef<IUser>[] = [
  {
    accessorKey: '_id',
    header: 'ID',
    cell: ({ row }) => <div>{row.getValue('_id')}</div>,
  },
  {
    accessorKey: 'username',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Username"
      />
    ),
    cell: ({ row }) => <div>{row.getValue('username')}</div>,
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Address"
      />
    ),
    cell: ({ row }) => <div>{row.getValue('address')}</div>,
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Phone"
      />
    ),
    cell: ({ row }) => <div>{row.getValue('phone')}</div>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Email"
      />
    ),
    cell: ({ row }) => <div>{row.getValue('email')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    header: 'Action',
    size: 270,
    cell: function Actions({ row }) {
      const [user, setUser] = useState<IUser>(defaultValueUser);
      const handleSetSelect = () => {
        setUser(row.original);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <EditUser
            user={user}
            onClick={handleSetSelect}
          />
          <DeleteUser
            user={user}
            onClick={handleSetSelect}
          />
        </div>
      );
    },
  },
];
