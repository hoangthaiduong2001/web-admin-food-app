import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const count = useSelector((state: RootState) => state.value);
  return (
    <div>
      <h1 className="text-red-500">Dashboard</h1>
      <p>{count}</p>
    </div>
  );
};

export default Dashboard;
