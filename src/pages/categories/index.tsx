import MultipleSelector from '@/components/MultipleSelect';
import { Option } from '@/components/MultipleSelect/type';
import { useState } from 'react';
import { optionMultiple } from './const';

const Categories = () => {
  const [selected, setSelected] = useState<Option[]>([]);
  return (
    <div className="w-full px-10 py-2">
      <MultipleSelector
        options={optionMultiple}
        value={selected}
        onChange={setSelected}
        placeholder="Select frameworks you like..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">no results found.</p>
        }
      />
    </div>
  );
};

export default Categories;
