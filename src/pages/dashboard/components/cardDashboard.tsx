import Card from '@/components/Card';
import { PaymentOrder } from '@/types/common';
import { AiFillProduct } from 'react-icons/ai';
import { FaMoneyBillWave, FaUser } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { ICardDashboard } from '../type';

const CardDashboard = ({ orders, products, users }: ICardDashboard) => {
  const totalRevenue =
    orders?.data.filter((item) => item.payment === PaymentOrder.Paid).reduce((acc, order) => acc + order.total, 0) || 0;
  const totalOrders = orders?.data.length || 0;
  const totalProducts = products?.data.length || 0;
  const totalUsers = users?.data.length || 0;
  return (
    <div className="flex items-center justify-between gap-4 p-5">
      <Card
        className="w-1/4"
        content={<p className="font-bold text-3xl">{totalRevenue} VNĐ</p>}
        title="Total Revenue"
        icon={<FaMoneyBillWave />}
        footer={<p>To present</p>}
      />
      <Card
        className="w-1/4"
        content={<p className="font-bold text-3xl">{totalOrders}</p>}
        title="Total Order"
        icon={<MdOutlinePayment />}
        footer={<p>To present</p>}
      />
      <Card
        className="w-1/4"
        content={<p className="font-bold text-3xl">{totalProducts}</p>}
        title="Total Product"
        icon={<AiFillProduct />}
        footer={<p>To present</p>}
      />
      <Card
        className="w-1/4"
        content={<p className="font-bold text-3xl">{totalUsers}</p>}
        title="Total User"
        icon={<FaUser />}
        footer={<p>To present</p>}
      />
    </div>
  );
};

export default CardDashboard;
