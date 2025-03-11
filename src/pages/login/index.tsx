import { RootState } from '@/store';
import { decrement, increment } from '@/store/features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const count = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-red-500">Login</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => navigate('/dashboard')}>Navigate home</button>
    </div>
  );
};

export default Login;
