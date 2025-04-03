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

{
  /* <div className="w-full px-10 py-2">
<MultipleSelector
  options={optionMultiple}
  value={selected}
  onChange={setSelected}
  placeholder="Select frameworks you like..."
  emptyIndicator={
    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">no results found.</p>
  }
/>
</div> */
}
