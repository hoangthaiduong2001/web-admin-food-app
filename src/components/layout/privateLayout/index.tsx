import { getUserInfo } from '@/config/storage';
import { paths } from '@/routes/paths';
import { useEffect } from 'react';
import { createSearchParams, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

const PrivateLayout = () => {
  const navigate = useNavigate();
  const user = getUserInfo();
  const location = useLocation();
  useEffect(() => {
    if (!user) {
      const currentPath = location.pathname;
      navigate({
        pathname: paths.login,
        search: createSearchParams({ redirect: currentPath }).toString(),
      });
    } else {
      navigate(paths.dashboard, { replace: true });
    }
  }, [location.pathname]);
  if (!user) {
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
