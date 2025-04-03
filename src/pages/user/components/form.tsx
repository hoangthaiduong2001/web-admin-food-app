import Input from '@/components/Input';
import { Controller } from 'react-hook-form';
import { TFormInstanceUser } from '../type';

const FormUser = ({ user, form, onSubmit }: TFormInstanceUser) => {
  const { control } = form;
  return (
    <div className="sm:w-10/12 md:w-8/12 lg:w-10/12 xl:w-full text-center">
      <form onSubmit={onSubmit}>
        <Controller
          name="username"
          control={control}
          render={({ field: { value = '', onChange }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={onChange}
              label="Username"
              placeholder="Input username"
              required
              errorMessage={error?.message}
            />
          )}
        />
        {!user?._id && (
          <Controller
            name="password"
            control={control}
            render={({ field: { value = '', onChange }, fieldState: { error } }) => (
              <Input
                value={value}
                onChange={onChange}
                label="Password"
                maxLength={20}
                placeholder="Input password"
                required
                errorMessage={error?.message}
              />
            )}
          />
        )}
        <Controller
          name="email"
          control={control}
          render={({ field: { value = '', onChange }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={onChange}
              label="Email"
              placeholder="example@gmail.com"
              required
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field: { value = '', onChange }, fieldState: { error } }) => (
            <Input
              pattern="[0-9]*"
              value={value}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, '');
                onChange(value);
              }}
              label="Phone"
              placeholder="Input phone"
              required
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field: { value = '', onChange }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={onChange}
              label="Address"
              placeholder="Input address"
              required
              errorMessage={error?.message}
            />
          )}
        />
      </form>
    </div>
  );
};

export default FormUser;
