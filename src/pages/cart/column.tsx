import SortingColumn from '@/components/Table/components/sortingTable';
import { ColumnDef } from '@tanstack/react-table';

import Avatar from '@/components/Avatar';
import { ICart, ProductCart } from '@/types/cart';
import { useState } from 'react';
import DeleteCart from './components/deleteCart';
import DetailCart from './components/detailCart';
import EditCart from './components/editCart';
import { initialValueCart, initialValueCartProduct } from './const';

export const cartColumns: ColumnDef<ICart>[] = [
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
    accessorKey: 'cart',
    header: 'Cart',
    cell: function Actions({ row }) {
      const [cart, setCart] = useState<ProductCart[]>(initialValueCartProduct);
      const handleSetSelect = () => {
        setCart(row.original.cart);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <DetailCart
            cart={cart}
            onClick={handleSetSelect}
          />
        </div>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    header: 'Action',
    size: 270,
    cell: function Actions({ row }) {
      const [cart, setCart] = useState<ICart>(initialValueCart);
      const handleSetSelect = () => {
        setCart(row.original);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <EditCart
            cart={cart}
            onClick={handleSetSelect}
          />
          <DeleteCart
            cart={cart}
            onClick={handleSetSelect}
          />
        </div>
      );
    },
  },
];

export const cartByIdColumns: ColumnDef<ProductCart>[] = [
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
    accessorKey: 'productName',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Product name"
      />
    ),
    cell: ({ row }) => <div>{row.getValue('productName')}</div>,
  },
  {
    accessorKey: 'quantity',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Quantity"
      />
    ),
    accessorFn: (row) => String(row.productName),
    cell: ({ row }) => <div>{String(row.getValue('quantity'))}</div>,
  },
  {
    accessorKey: 'totalPrice',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Total price"
      />
    ),
    accessorFn: (row) => String(row.productName),
    cell: ({ row }) => <div>{String(row.getValue('totalPrice'))}</div>,
  },
];
