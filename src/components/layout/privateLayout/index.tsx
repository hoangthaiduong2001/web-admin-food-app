import SidebarProvider from '@/components/layout/Sidebar/components/sidebarProvider';
import { paths } from '@/routes/paths';
import { RootState } from '@/store';
import { UserRole } from '@/types/common';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSearchParams, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header';
import AppSidebar from '../Sidebar';

const PrivateLayout = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();
  useEffect(() => {
    if (user.role !== UserRole.Admin) {
      const currentPath = location.pathname;
      navigate({
        pathname: paths.login,
        search: createSearchParams({ redirect: currentPath }).toString(),
      });
    }
  }, [location.pathname]);
  if (user.role !== UserRole.Admin) {
    return <Navigate to={paths.login} />;
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default PrivateLayout;
