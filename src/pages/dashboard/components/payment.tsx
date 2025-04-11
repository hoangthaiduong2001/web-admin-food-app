import { PaymentOrder } from '@/types/common';
import { OrderResType } from '@/types/order';
import ReactApexChart from 'react-apexcharts';
import { IChartData } from '../type';

const PaymentDashboard = ({ className, orders }: { className?: string; orders: OrderResType | undefined }) => {
  const unpaidOrders = orders?.data.filter((item) => item.payment === PaymentOrder.Unpaid).length || 0;
  const paidOrders = orders?.data.filter((item) => item.payment === PaymentOrder.Paid).length || 0;
  const dataChart: IChartData = {
    series: [unpaidOrders, paidOrders],
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Unpaid', 'Paid'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <div className={className}>
      <ReactApexChart
        options={dataChart.options}
        series={dataChart.series}
        type="pie"
        width={450}
      />
    </div>
  );
};

export default PaymentDashboard;
