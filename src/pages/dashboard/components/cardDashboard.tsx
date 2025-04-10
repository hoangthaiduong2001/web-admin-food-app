import Card from '@/components/Card';
import { FaMoneyBillWave } from 'react-icons/fa';

const CardDashboard = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-5">
      <Card
        className="w-1/4"
        content={<p>$1000</p>}
        title="Total Revenue"
        icon={<FaMoneyBillWave />}
        footer={<div>Last 30 days</div>}
      />
      <Card
        className="w-1/4"
        content={<div>$1000</div>}
        title="Total Revenue"
        icon={<FaMoneyBillWave />}
        footer={<div>Last 30 days</div>}
      />
      <Card
        className="w-1/4"
        content={<div>$1000</div>}
        title="Total Revenue"
        icon={<FaMoneyBillWave />}
        footer={<div>Last 30 days</div>}
      />
      <Card
        className="w-1/4"
        content={<div>$1000</div>}
        title="Total Revenue"
        icon={<FaMoneyBillWave />}
        footer={<div>Last 30 days</div>}
      />
    </div>
  );
};

export default CardDashboard;
