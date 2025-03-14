import { Button } from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Table from '@/components/Table';
import { RootState } from '@/store';
import { decrement, increment } from '@/store/features/counter/counterSlice';
import { useState } from 'react';
import { FaEye, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { columnsTable, TableContext } from './const';

const Login = () => {
  const [value, setValue] = useState('');
  const [valueSelect, setValueSelect] = useState('');
  const count = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        data={[]}
        AddItem={() => <div>Add</div>}
        EditItem={() => <div>Edit</div>}
        filterName="number"
        tableContext={TableContext}
        columns={columnsTable}
        name="table"
      />
      <h1 className="text-red-500">Login</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => navigate('/dashboard')}>Navigate home</button>
    </div>
  );
};

export default Login;
