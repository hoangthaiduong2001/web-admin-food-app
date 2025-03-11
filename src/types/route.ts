import { ReactNode } from 'react';
import { UserRole } from './common';

export interface RouteItem {
  path: string;
  child?: RouteItem[];
  roles?: UserRole[];
  element: ReactNode;
}
