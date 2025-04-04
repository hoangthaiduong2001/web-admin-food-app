import SortingColumn from '@/components/Table/components/sortingTable';
import { IReview } from '@/types/review';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import DeleteReview from './components/deleteReview';
import { defaultReview } from './const';

export const reviewColumns: ColumnDef<IReview>[] = [
  {
    accessorKey: '_id',
    header: 'ID',
    cell: ({ row }) => <div>{row.getValue('_id')}</div>,
  },
  {
    id: 'product',
    accessorFn: (row) => row.product.title,
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Product"
      />
    ),
    cell: ({ row }) => {
      const product = row.original.product;
      return <div>{product.title}</div>;
    },
  },
  {
    id: 'reviewer',
    accessorFn: (row) => row.reviewer.username,
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Reviewer"
      />
    ),
    cell: ({ row }) => {
      const reviewer = row.original.reviewer;
      return <div>{reviewer.username}</div>;
    },
  },
  {
    accessorKey: 'rating',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Rating"
      />
    ),
    accessorFn: (row) => String(row.rating),
    cell: ({ row }) => <div>{String(row.getValue('rating'))}</div>,
  },
  {
    accessorKey: 'content',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="Content"
      />
    ),
    cell: ({ row }) => <div>{String(row.getValue('content'))}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    header: 'Action',
    size: 270,
    cell: function Actions({ row }) {
      const [review, setReview] = useState<IReview>(defaultReview);
      const handleSetSelect = () => {
        setReview(row.original);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <DeleteReview
            review={review}
            onClick={handleSetSelect}
          />
        </div>
      );
    },
  },
];
