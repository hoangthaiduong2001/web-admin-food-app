import { RootState } from '@/store';
import { decrement, increment } from '@/store/features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const count = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Login</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment </button>
      <button onClick={() => dispatch(decrement())}>Decrement </button>
    </div>
  );
};

export default Login;
