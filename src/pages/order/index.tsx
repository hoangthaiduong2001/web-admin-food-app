import { useGetAllOrder } from '@/apis/hooks/order';
import Table from '@/components/Table';
import { useState } from 'react';
import { orderColumns } from './column';
import AddOrder from './components/createOrder';
import { filterOrder } from './const';

const Order = () => {
  const [valueSelect, setValueSelect] = useState(filterOrder[0].value);
  const { data, isPending } = useGetAllOrder();
  return (
    <div className="px-4">
      <Table
        data={data?.data || []}
        AddItem={() => <AddOrder />}
        isPending={isPending}
        columns={orderColumns}
        selectFilter={{
          placeholder: 'Filter by',
          value: valueSelect,
          onChange: setValueSelect,
          items: filterOrder,
        }}
        isLink
      />
    </div>
  );
};

export default Order;
