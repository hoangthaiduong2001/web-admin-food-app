import Avatar from '@/components/Avatar';
import { Button } from '@/components/Button';
import SortingColumn from '@/components/Table/components/sortingTable';
import { IProduct } from '@/types/product';

import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';

export const productColumns: ColumnDef<IProduct>[] = [
  {
    accessorKey: '_id',
    header: 'ID',
    cell: ({ row }) => <div className="capitalize">{row.getValue('_id')}</div>,
  },
  {
    accessorKey: 'img',
    header: 'Image',
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Avatar url={row.getValue('img')} />
      </div>
    ),
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Title"
      />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Price"
      />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('price')}</div>,
  },
  {
    accessorKey: 'discount',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Discount"
      />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('discount')}</div>,
  },
  {
    accessorKey: 'desc',
    header: 'Description',
    cell: ({ row }) => <div className="capitalize">{row.getValue('desc')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    header: 'Action',
    size: 270,
    cell: function Actions({ row }) {
      const [id, setId] = useState('');
      const [user, setUser] = useState('');
      const handleSetSelect = () => {
        setId(row.original._id);
        setUser(row.original.title);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      );
    },
  },
];
