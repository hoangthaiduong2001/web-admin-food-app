import { useGetAllUser } from '@/apis/hooks/user';
import Table from '@/components/Table';
import { useState } from 'react';
import { userColumns } from './column';
import AddUser from './components/AddUser';
import { filterUserTable } from './const';

const User = () => {
  const [valueSelect, setValueSelect] = useState(filterUserTable[0].value);
  const { data, isPending } = useGetAllUser();
  return (
    <div className="px-4">
      <Table
        data={data?.data || []}
        AddItem={() => <AddUser />}
        isPending={isPending}
        columns={userColumns}
        selectFilter={{
          placeholder: 'Filter by',
          value: valueSelect,
          onChange: setValueSelect,
          items: filterUserTable,
        }}
        isLink
      />
    </div>
  );
};

export default User;
