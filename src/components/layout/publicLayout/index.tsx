import { paths } from '@/routes/paths';
import { RootState } from '@/store';
import { UserRole } from '@/types/common';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicLayout = () => {
  const user = useSelector((state: RootState) => state.user);
  if (user.role === UserRole.Admin) {
    return <Navigate to={paths.dashboard} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicLayout;
