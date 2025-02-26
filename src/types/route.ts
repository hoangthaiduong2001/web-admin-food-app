import { ReactNode } from 'react';

enum UserRole {
  Admin = 'admin',
  User = 'user',
}

export interface RouteItem {
  path: string;
  child?: RouteItem[];
  roles?: UserRole[];
  element: ReactNode;
}
