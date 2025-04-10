import ReactApexChart from 'react-apexcharts';
import { IChartData } from '../type';

const Chart = ({ className }: { className?: string }) => {
  const dataChart: IChartData = {
    series: [100, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
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
        width={380}
      />
    </div>
  );
};

export default Chart;
