import Loading from '@/components/loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const PublicRoutes = () => {
  //   const { user } = useAuth();

  //   if (user) {
  //     return <Navigate to="/" />;
  //   }

  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoutes;
