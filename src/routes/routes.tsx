import Dashboard from '@/pages/dashboard';
import { RouteItem } from '../types/route';
import { paths } from './paths';

export const routes: RouteItem[] = [
  {
    path: paths.dashboard,
    element: <Dashboard />,
  },
];
