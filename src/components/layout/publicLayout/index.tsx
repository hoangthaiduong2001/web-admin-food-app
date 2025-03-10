import { getUserInfo } from '@/config/storage';
import { paths } from '@/routes/paths';
import { Navigate, Outlet } from 'react-router-dom';

const PublicLayout = () => {
  const user = getUserInfo();
  if (user) {
    return <Navigate to={paths.dashboard} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicLayout;
