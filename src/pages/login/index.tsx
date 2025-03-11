import Input from '@/components/Input';
import { RootState } from '@/store';
import { decrement, increment } from '@/store/features/counter/counterSlice';
import { useState } from 'react';
import { FaEye, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [value, setValue] = useState('');
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
      <h1 className="text-red-500">Login</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => navigate('/dashboard')}>Navigate home</button>
    </div>
  );
};

export default Login;
