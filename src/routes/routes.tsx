import Dashboard from '@/pages/dashboard';
import { FaHome, FaUserEdit } from 'react-icons/fa';
import { RouteItem } from '../types/route';
import { paths } from './paths';

export const routes: RouteItem[] = [
  {
    path: paths.dashboard,
    title: 'Dashboard',
    element: <Dashboard />,
    icon: <FaHome />,
  },
  {
    path: paths.user,
    title: 'User',
    element: <>User</>,
    icon: <FaUserEdit />,
  },
];
