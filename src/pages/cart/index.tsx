import { useGetAllCart } from '@/apis/hooks/cart';
import Table from '@/components/Table';
import { useState } from 'react';
import { cartColumns } from './column';
import { filterCartTable } from './const';

const Cart = () => {
  const [valueSelect, setValueSelect] = useState(filterCartTable[0].value);
  const { data, isPending } = useGetAllCart();
  return (
    <div className="px-4">
      <Table
        data={data?.data || []}
        AddItem={() => <></>}
        isPending={isPending}
        columns={cartColumns}
        selectFilter={{
          placeholder: 'Filter by',
          value: valueSelect,
          onChange: setValueSelect,
          items: filterCartTable,
        }}
        isLink
      />
    </div>
  );
};

export default Cart;
