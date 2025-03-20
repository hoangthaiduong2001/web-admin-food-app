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

const Login = () => {
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

export default Login;
