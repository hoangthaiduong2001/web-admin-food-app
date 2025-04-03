import Input from '@/components/Input';
import MultipleSelector from '@/components/MultipleSelect';
import { Controller } from 'react-hook-form';
import { TFormInstanceCategories } from '../type';

const FormCategories = ({ form, option, selected, setSelected }: TFormInstanceCategories) => {
  const { control } = form;
  return (
    <div className="sm:w-10/12 md:w-8/12 lg:w-10/12 xl:w-full text-center">
      <Controller
        name="name"
        control={control}
        render={({ field: { value = '', onChange }, fieldState: { error } }) => (
          <Input
            value={value}
            onChange={onChange}
            label="Name categories"
            placeholder="Input name categories"
            required
            errorMessage={error?.message}
          />
        )}
      />
      {selected && (
        <MultipleSelector
          label="Select product"
          options={option}
          value={selected}
          onChange={setSelected}
          placeholder="Select product..."
          emptyIndicator={
            <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">no results found.</p>
          }
        />
      )}
    </div>
  );
};

export default FormCategories;
