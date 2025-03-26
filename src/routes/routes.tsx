import { FaHome, FaUserEdit } from 'react-icons/fa';
import { RouteItem } from '../types/route';
import { DashboardPage, UserPage } from './lazyLoad';
import { paths } from './paths';

export const routes: RouteItem[] = [
  {
    path: paths.dashboard,
    title: 'Dashboard',
    element: <DashboardPage />,
    icon: <FaHome />,
  },
  {
    path: paths.user,
    title: 'User',
    element: <UserPage />,
    icon: <FaUserEdit />,
  },
];
