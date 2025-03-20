// import { CommonTextField } from '@/components/CommonTextField';

// import {
//   setDataToSessionStorage,
//   setIdSocketToSessionStorage,
// } from '@/config/storage';
// import { paths } from '@/routes/path';
// import { UserOnline, UserOnlineError } from '@/types/user';
// import { showToast } from '@/utils';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Button } from '@mui/material';
// import { useEffect } from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import { FaUser } from 'react-icons/fa';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useNavigate } from 'react-router-dom';
// import { LoginSchema, LoginSchemaType } from './schema';

// const Login = () => {
//   const navigate = useNavigate();
//   const { control, handleSubmit } = useForm<LoginSchemaType>({
//     resolver: yupResolver(LoginSchema),
//     defaultValues: {
//       username: '',
//     },
//   });
//   const onSubmit = handleSubmit(
//     (value: LoginSchemaType) => {
//       socket.emit('user:login', value.username);
//       socket.once('usersOnline', (data: UserOnline) => {
//         if (data.event !== 'error') {
//           setIdSocketToSessionStorage(socket.id as string);
//           setDataToSessionStorage(data.data[data.data.length - 1]);
//           navigate(paths.chat);
//           showToast('Login success', 'success');
//         }
//       });
//     },
//     (error) => console.log(error)
//   );

//   return (
//     <section className="h-screen">
//       <div className="h-full">
//         <div className="flex h-full lg:h-full md:h-0 sm:h-0 flex-wrap items-center justify-center ">
//           <div className="grow-0  basis-auto md:mb-0 md:w-7/12 md:shrink-0 lg:w-6/12 xl:w-6/12 sm:w-7/12">
//             <img
//               src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//               alt="image"
//             />
//           </div>
//           <div className="gap-5 w-full bg-white dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
//             <div className="flex flex-col items-center justify-center space-y-6 sm:p-8 md:p-6 lg:p-8">
//               <h1 className="text-xl font-bold  tracking-tight text-gray-900 md:text-2xl dark:text-white ">
//                 Sign in to your account
//               </h1>
//               <div className="sm:w-10/12 md:w-8/12 lg:w-10/12 xl:w-full">
//                 <form onSubmit={onSubmit}>
//                   <Controller
//                     name="username"
//                     control={control}
//                     render={({
//                       field: { value = '', onChange },
//                       fieldState: { error },
//                     }) => (
//                       <CommonTextField
//                         value={value}
//                         onChange={onChange}
//                         placeholder="Username"
//                         startAdornmentChildren={<FaUser />}
//                         errorMessage={error?.message}
//                         clearable
//                       />
//                     )}
//                   />
//                   <Button
//                     className="h-10 w-full text-xl"
//                     sx={{ marginTop: 5 }}
//                     type="submit"
//                     onClick={onSubmit}
//                   >
//                     Login
//                   </Button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;

import Alert from '@/components/Alert';
import { Button } from '@/components/Button';
import Dialog from '@/components/Dialog';
import { Form, FormField, FormItem, FormLabel } from '@/components/Form';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Table from '@/components/Table';

import { dataTable } from '@/components/Table/const';
import { showToast } from '@/components/Toast';
import { RootState } from '@/store';
import { decrement, increment } from '@/store/features/counter/counterSlice';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { columnsTable, TableContext } from './const';

const DemoComponents = () => {
  const [value, setValue] = useState('');
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openAlter, setOpenAlter] = useState<boolean>(false);
  const [valueSelect, setValueSelect] = useState('');
  const count = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm({
    resolver: async (values) => {
      return {
        values: values.username ? values : {},
        errors: values.username ? {} : { username: { type: 'required', message: 'Username is required' } },
      };
    },
  });
  const {
    formState: { errors },
  } = form;

  useEffect(() => {
    showToast({ message: 'success', type: 'success' });
  }, []);
  return (
    <div>
      <Input
        startAdornment={<FaUser />}
        endAdornment={<FaEye />}
        errorMessage="This is error"
        placeholder="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        readOnly
      />
      <div className="flex gap-2">
        <Button
          variant="text"
          size="sm"
        >
          Test
        </Button>
        <Button
          variant="contained"
          size="sm"
        >
          Test
        </Button>
        <Button
          variant="outline"
          size="sm"
        >
          Test
        </Button>
        <Button
          variant="success"
          size="sm"
        >
          Test
        </Button>
        <Button
          variant="destructive"
          size="sm"
        >
          Test
        </Button>
      </div>
      <div className="mt-3">
        <Select
          placeholder="placeholder test"
          items={[
            { label: 'Test1', value: 'test1' },
            { label: 'Test2', value: 'test2' },
          ]}
          value={valueSelect}
          onChange={setValueSelect}
        />
      </div>
      <Table
        name="table"
        data={dataTable}
        AddItem={() => <div>Add</div>}
        filterName="number"
        tableContext={TableContext}
        columns={columnsTable}
        selectFilter={{
          placeholder: 'test',
          value: valueSelect,
          onChange: setValueSelect,
          items: [
            { label: 'Test1', value: 'test1' },
            { label: 'Test2', value: 'test2' },
          ],
        }}
        isLink
      />
      <Dialog
        open={openDialog}
        setOpen={setOpenDialog}
        titleButton="Dialog"
        titleDialog="Title"
        children={<>Content</>}
        description="description"
        onClick={() => {
          console.log('submit');
          setOpenDialog(false);
        }}
      />
      <Alert
        description="description alter"
        onClick={() => console.log('alter')}
        open={openAlter}
        setOpen={setOpenAlter}
        titleAlter="Alter"
        titleButton="Alter"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => console.log('123'))}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field: { name, onChange, value } }) => (
              <FormItem>
                <FormLabel className="flex justify-self-start items-start">Username</FormLabel>
                <Input
                  name={name}
                  value={value}
                  onChange={onChange}
                  errorMessage={errors.username?.message as string}
                />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <h1 className="text-red-500">Login</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => navigate('/dashboard')}>Navigate home</button>
    </div>
  );
};

export default DemoComponents;
