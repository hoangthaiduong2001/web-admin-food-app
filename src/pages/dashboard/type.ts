import { OrderResType } from '@/types/order';
import { GetAllProductResType } from '@/types/product';
import { UserResType } from '@/types/user';
import { ApexOptions } from 'apexcharts';

export interface IChartData {
  series: number[];
  options: ApexOptions;
}

export interface ICardDashboard {
  orders: OrderResType | undefined;
  products: GetAllProductResType | undefined;
  users: UserResType | undefined;
}
