import SortingColumn from '@/components/Table/components/sortingTable';
import { IOrderResType } from '@/types/order';
import { ColumnDef } from '@tanstack/react-table';

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
      // const [products, setProducts] = useState<IListProductCategories[]>([]);
      // const [id, setId] = useState<string>('');
      const handleSetSelect = () => {
        //   setProducts(row.original.products);
        //   setId(row.original._id);
      };
      return <div className="flex items-center justify-center gap-2">detail</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    header: 'Action',
    size: 270,
    cell: function Actions({ row }) {
      // const [product, setProduct] = useState<ICategoriesResType>(initialProductCategories);
      const handleSetSelect = () => {
        //   setProduct(row.original);
      };
      return (
        <div className="flex items-center justify-center gap-2">
          edit
          {/* <EditCategories
              product={product}
              onClick={handleSetSelect}
            />
            <DeleteCategories
              product={product}
              onClick={handleSetSelect} 
            />*/}
        </div>
      );
    },
  },
];
