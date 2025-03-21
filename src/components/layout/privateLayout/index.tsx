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
    } else {
      navigate(paths.dashboard, { replace: true });
    }
  }, [location.pathname]);
  if (user.role !== UserRole.Admin) {
    return <Navigate to={paths.login} />;
  }
  return (
    <>
      <div>Header</div>
      <div>Sidebar</div>
      <div>
        Page Content
        <Outlet />
      </div>
    </>
  );
};

export default PrivateLayout;
