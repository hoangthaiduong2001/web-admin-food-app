import Avatar from '@/components/Avatar';
import SortingColumn from '@/components/Table/components/sortingTable';
import { PaymentOrder, StatusOrder } from '@/types/common';
import { IOrderResType, IProductOrder } from '@/types/order';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import DeleteOrder from './components/deleteOrder';
import DetailOrder from './components/detailOrder';
import UpdateOrder from './components/updateOrder';
import { defaultValueOrder } from './const';

export const orderColumns: ColumnDef<IOrderResType>[] = [
  {
    accessorKey: '_id',
    header: 'ID',
    cell: ({ row }) => <div>{row.getValue('_id')}</div>,
  },
  {
    id: 'customer',
    accessorFn: (row) => row.customer.username,
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Customer"
      />
    ),
    cell: ({ row }) => {
      const customer = row.original.customer;
      return <div>{customer.username}</div>;
    },
  },
  {
    id: 'address',
    accessorFn: (row) => row.customer.address,
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Address"
      />
    ),
    cell: ({ row }) => {
      const customer = row.original.customer;
      return <div>{customer.address}</div>;
    },
  },
  {
    accessorKey: 'total',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Total"
      />
    ),
    accessorFn: (row) => String(row.total),
    cell: ({ row }) => <div>{String(row.getValue('total'))}</div>,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Status"
      />
    ),
    cell: ({ row }) => <div>{row.getValue('status')}</div>,
  },
  {
    accessorKey: 'payment',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Payment"
      />
    ),
    cell: ({ row }) => <div>{row.getValue('payment')}</div>,
  },
  {
    accessorKey: 'products',
    header: 'Products',
    cell: function Actions({ row }) {
      const [products, setProducts] = useState<IProductOrder[]>([]);
      const handleSetSelect = () => {
        setProducts(row.original.products);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <DetailOrder
            onClick={handleSetSelect}
            products={products}
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
      const [id, setId] = useState<string>('');
      const [payment, setPayment] = useState<PaymentOrder>(PaymentOrder.Unpaid);
      const [status, setStatus] = useState<StatusOrder>(StatusOrder.Waiting);
      const [order, setOrder] = useState<IOrderResType>(defaultValueOrder);
      const handleSetSelect = () => {
        setId(row.original._id);
        setPayment(row.original.payment);
        setStatus(row.original.status);
        setOrder(row.original);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <UpdateOrder
            id={id}
            payment={payment}
            status={status}
            onClick={handleSetSelect}
          />
          <DeleteOrder
            order={order}
            onClick={handleSetSelect}
          />
        </div>
      );
    },
  },
];

export const productsOrderColumns: ColumnDef<IProductOrder>[] = [
  {
    id: 'title',
    accessorFn: (row) => row.product.title,
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Title"
      />
    ),
    cell: ({ row }) => {
      const product = row.original.product;
      return <div>{product.title}</div>;
    },
  },
  {
    accessorKey: 'img',
    header: 'Image',
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Avatar url={row.original.product.img} />
      </div>
    ),
  },
  {
    id: 'price',
    accessorFn: (row) => row.product.price,
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Price"
      />
    ),
    cell: ({ row }) => {
      const product = row.original.product;
      return <div>{product.price}</div>;
    },
  },
  {
    id: 'discount',
    accessorFn: (row) => row.product.discount,
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Discount"
      />
    ),
    cell: ({ row }) => {
      const product = row.original.product;
      return <div>{product.discount}</div>;
    },
  },
  {
    accessorKey: 'quantity',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Quantity"
      />
    ),
    cell: ({ row }) => <div>{row.original.quantity}</div>,
  },
];
