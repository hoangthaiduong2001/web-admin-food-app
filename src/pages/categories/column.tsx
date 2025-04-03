import Avatar from '@/components/Avatar';
import SortingColumn from '@/components/Table/components/sortingTable';
import { ICategoriesResType, IListProductCategories, IProductCategories } from '@/types/categories';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';

import DeleteCategories from './components/deleteCategories';
import DeleteDetailCategories from './components/deleteDetailCategories';
import DetailCategories from './components/detailCategories';
import EditCategories from './components/editCategories';
import { initialDetailProductCategories, initialProductCategories } from './const';

export const categoriesColumns: ColumnDef<ICategoriesResType>[] = [
  {
    accessorKey: '_id',
    header: 'ID',
    cell: ({ row }) => <div>{row.getValue('_id')}</div>,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <SortingColumn
        column={column}
        label="name"
      />
    ),
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'products',
    header: 'Products',
    cell: function Actions({ row }) {
      const [products, setProducts] = useState<IListProductCategories[]>([]);
      const [id, setId] = useState<string>('');
      const handleSetSelect = () => {
        setProducts(row.original.products);
        setId(row.original._id);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <DetailCategories
            id={id}
            products={products}
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
      const [product, setProduct] = useState<ICategoriesResType>(initialProductCategories);
      const handleSetSelect = () => {
        setProduct(row.original);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <EditCategories
            product={product}
            onClick={handleSetSelect}
          />
          <DeleteCategories
            product={product}
            onClick={handleSetSelect}
          />
        </div>
      );
    },
  },
];

export const productsCategoriesColumns = (
  categoriesId: string,
  setOpenDialog: (value: boolean) => void
): ColumnDef<IProductCategories>[] => [
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
        label="Product name"
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
    cell: ({ row }) => <div>{row.getValue('price')}</div>,
  },
  {
    accessorKey: 'actions',
    enableHiding: false,
    header: 'Action',
    cell: ({ row }) => {
      const [product, setProduct] = useState<IProductCategories>(initialDetailProductCategories);
      const handleSetSelect = () => {
        setProduct(row.original);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          <DeleteDetailCategories
            product={product}
            categoriesId={categoriesId}
            onClick={handleSetSelect}
            setOpenDialog={setOpenDialog}
          />
        </div>
      );
    },
  },
];
