import { useGetAllCategories } from '@/apis/hooks/categories';
import Table from '@/components/Table';
import { useState } from 'react';
import { categoriesColumns } from './column';
import AddCategories from './components/createCategories';
import { filterCategories } from './const';

const Categories = () => {
  const [valueSelect, setValueSelect] = useState(filterCategories[0].value);
  const { data, isPending } = useGetAllCategories();
  return (
    <div className="px-4">
      <Table
        data={data?.data || []}
        AddItem={() => <AddCategories />}
        isPending={isPending}
        columns={categoriesColumns}
        selectFilter={{
          placeholder: 'Filter by',
          value: valueSelect,
          onChange: setValueSelect,
          items: filterCategories,
        }}
        isLink
      />
    </div>
  );
};

export default Categories;
