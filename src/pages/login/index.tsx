import { useLoginMutation } from '@/apis/hooks/auth';
import { Button } from '@/components/Button';
import Input from '@/components/Input';
import { showToast } from '@/components/Toast';
import { login } from '@/store/features/auth/authSlice';
import { UserRole } from '@/types/common';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { defaultValueLogin } from './const';
import { LoginSchema, LoginSchemaType } from './schema';

const Login = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const { mutate: loginMutation } = useLoginMutation();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    resolver: yupResolver(LoginSchema),
    defaultValues: defaultValueLogin,
  });
  const onSubmit = handleSubmit(
    (value: LoginSchemaType) => {
      loginMutation(value, {
        onSuccess: (data) => {
          if (data.user.role === UserRole.Admin) {
            dispatch(login(data.user));
            showToast({ message: data.message, type: 'success' });
          } else {
            showToast({ message: 'You are not permission, admin only access', type: 'warning' });
          }
        },
        onError: (error) => {
          showToast({ message: error.message, type: 'error' });
        },
      });
    },
    (error) => console.log(error)
  );

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="flex h-full lg:h-full md:h-0 sm:h-0 flex-wrap items-center justify-center ">
          <div className="grow-0  basis-auto md:mb-0 md:w-7/12 md:shrink-0 lg:w-6/12 xl:w-6/12 sm:w-7/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="image"
            />
          </div>
          <div className="gap-5 w-full bg-white dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center space-y-6 sm:p-8 md:p-6 lg:p-8">
              <h1 className="text-xl font-bold  tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                Sign in to your account
              </h1>
              <div className="sm:w-10/12 md:w-8/12 lg:w-10/12 xl:w-full">
                <form onSubmit={onSubmit}>
                  <Controller
                    name="username"
                    control={control}
                    render={({ field: { value = '', onChange }, fieldState: { error } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        label="Username"
                        startAdornment={<FaUser />}
                        placeholder="Input username"
                        errorMessage={error?.message}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    render={({ field: { value = '', onChange }, fieldState: { error } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        label="Password"
                        startAdornment={<FaLock />}
                        maxLength={20}
                        endAdornment={isShow ? <FaEye /> : <FaEyeSlash />}
                        type={isShow ? 'text' : 'password'}
                        onClickEndAdornment={() => setIsShow((prev) => !prev)}
                        placeholder="Input password"
                        errorMessage={error?.message}
                      />
                    )}
                  />
                  <Button
                    className="h-10 w-full text-xl"
                    type="submit"
                    variant="contained"
                    onClick={onSubmit}
                  >
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
