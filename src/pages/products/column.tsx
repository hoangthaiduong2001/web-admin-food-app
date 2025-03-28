import Avatar from '@/components/Avatar';
import SortingColumn from '@/components/Table/components/sortingTable';
import { IProduct } from '@/types/product';

import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import DeleteProduct from './components/DeleteProduct';
import EditProduct from './components/EditProduct';
import { defaultValueProduct } from './const';

export const productColumns: ColumnDef<IProduct>[] = [
  {
    accessorKey: '_id',
    header: 'ID',
    cell: ({ row }) => <div>{row.getValue('_id')}</div>,
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
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Price"
      />
    ),
    accessorFn: (row) => String(row.price),
    cell: ({ row }) => <div>{String(row.getValue('price'))}</div>,
  },
  {
    accessorKey: 'discount',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Discount"
      />
    ),
    accessorFn: (row) => String(row.discount),
    cell: ({ row }) => <div>{String(row.getValue('discount'))}</div>,
  },
  {
    accessorKey: 'desc',
    header: 'Description',
    cell: ({ row }) => <div>{row.getValue('desc')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    header: 'Action',
    size: 270,
    cell: function Actions({ row }) {
      const [product, setProduct] = useState<IProduct>(defaultValueProduct);
      const handleSetSelect = () => {
        setProduct(row.original);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <EditProduct
            product={product}
            onClick={handleSetSelect}
          />
          <DeleteProduct
            product={product}
            onClick={handleSetSelect}
          />
        </div>
      );
    },
  },
];
