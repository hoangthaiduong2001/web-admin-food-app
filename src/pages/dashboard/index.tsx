import SidebarTrigger from '@/components/Sidebar/components/sidebarTrigger';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const count = useSelector((state: RootState) => state.count.value);
  return (
    <div>
      <h1 className="text-red-500">
        <SidebarTrigger />
        Dashboard
      </h1>
      <p>{count}</p>
    </div>
  );
};

export default Dashboard;
