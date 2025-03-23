import { AppSidebar } from '@/components/Sidebar';
import SidebarProvider from '@/components/Sidebar/components/sidebarProvider';
import SidebarTrigger from '@/components/Sidebar/components/sidebarTrigger';
import { paths } from '@/routes/paths';
import { RootState } from '@/store';
import { UserRole } from '@/types/common';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSearchParams, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

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
        <div className="flex">
          <SidebarTrigger />
          <div className="bg-blue-500 w-full">Header</div>
        </div>
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default PrivateLayout;
