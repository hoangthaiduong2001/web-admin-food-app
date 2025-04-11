import { useGetAllOrder } from '@/apis/hooks/order';
import { useGetAllProduct } from '@/apis/hooks/product';
import { useGetAllUser } from '@/apis/hooks/user';
import CardDashboard from './components/cardDashboard';
import PaymentDashboard from './components/payment';
import StatusOrderDashboard from './components/statusOrder';

const Dashboard = () => {
  const { data: orders } = useGetAllOrder();
  const { data: products } = useGetAllProduct();
  const { data: users } = useGetAllUser();
  return (
    <div className="flex flex-col gap-4">
      <CardDashboard
        orders={orders}
        products={products}
        users={users}
      />
      <div className="flex gap-4 w-full items-center justify-center">
        <PaymentDashboard
          className="w-1/2 flex justify-center"
          orders={orders}
        />
        <StatusOrderDashboard
          className="w-1/2"
          orders={orders}
        />
      </div>
    </div>
  );
};

export default Dashboard;
