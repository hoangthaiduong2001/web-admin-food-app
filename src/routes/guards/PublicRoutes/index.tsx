import Loading from '@/components/loading';
import { getUserInfo } from '@/config/storage';
import { paths } from '@/routes/paths';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
  const user = getUserInfo();
  if (user) {
    return <Navigate to={paths.dashboard} />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoutes;
