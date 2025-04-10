import CardDashboard from './components/cardDashboard';
import Chart from './components/chart';
import OrderDashboard from './components/order';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <CardDashboard />
      <div className="flex gap-4 w-full items-center justify-center">
        <Chart className="w-1/2" />
        <OrderDashboard className="w-1/2" />
      </div>
    </div>
  );
};

export default Dashboard;
