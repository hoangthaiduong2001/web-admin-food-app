import { ReactNode } from 'react';
import { UserRole } from './common';

export interface RouteItem {
  path: string;
  child?: RouteItem[];
  title?: string;
  roles?: UserRole[];
  element: ReactNode;
  icon?: ReactNode;
}
