import Input from '@/components/Input';
import InputFile from '@/components/InputFile';
import { Controller } from 'react-hook-form';
import { TFormInstanceProduct } from '../type';

const FormProduct = ({ form, onSubmit, setFile, img }: TFormInstanceProduct) => {
  const { control } = form;
  return (
    <div className="sm:w-10/12 md:w-8/12 lg:w-10/12 xl:w-full text-center">
      <form onSubmit={onSubmit}>
        <Controller
          name="img"
          control={control}
          render={() => (
            <InputFile
              onChange={setFile}
              img={img || ''}
            />
          )}
        />
        <Controller
          name="title"
          control={control}
          render={({ field: { value = '', onChange }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={onChange}
              label="Title"
              placeholder="Input title"
              required
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          render={({ field: { value = '', onChange }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={(e) => {
                let value = e.target.value;
                const numberValue = Number(value);
                if (isNaN(numberValue)) {
                  return;
                }
                onChange(numberValue);
              }}
              label="Price"
              placeholder="Input price"
              required
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          name="discount"
          control={control}
          render={({ field: { value = '', onChange } }) => (
            <Input
              pattern="[0-9]*"
              value={value}
              onChange={(e) => {
                let value = e.target.value;
                const numberValue = Number(value);
                if (isNaN(numberValue)) {
                  return;
                }
                onChange(numberValue);
              }}
              label="Discount"
              placeholder="Input discount"
            />
          )}
        />
        <Controller
          name="desc"
          control={control}
          render={({ field: { value = '', onChange }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={onChange}
              label="Description"
              placeholder="Input description"
              required
              errorMessage={error?.message}
            />
          )}
        />
      </form>
    </div>
  );
};

export default FormProduct;
