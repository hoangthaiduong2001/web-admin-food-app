import { StatusOrder } from '@/types/common';
import { OrderResType } from '@/types/order';
import ReactApexChart from 'react-apexcharts';
import { IChartData } from '../type';

const StatusOrderDashboard = ({ className, orders }: { className?: string; orders: OrderResType | undefined }) => {
  const waiting = orders?.data.filter((item) => item.status === StatusOrder.Waiting).length || 0;
  const delivered = orders?.data.filter((item) => item.status === StatusOrder.Delivered).length || 0;
  const dataChart: IChartData = {
    series: [waiting, delivered],
    options: {
      chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              show: false,
            },
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            offsetX: -8,
            fontSize: '16px',
            formatter: function (seriesName: string, opts: any) {
              return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
            },
          },
        },
      },
      colors: ['#1ab7ea', '#39539E'],
      labels: ['Waiting', 'Delivered'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
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
        type="radialBar"
        width={450}
      />
    </div>
  );
};

export default StatusOrderDashboard;
