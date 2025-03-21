import { paths } from '@/routes/paths';
import { routes } from '@/routes/routes';
import { RootState } from '@/store';
import { UserRole } from '@/types/common';
import { RouteItem } from '@/types/route';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoutes = () => {
  const user = useSelector((state: RootState) => state.user);
  const role = user?.role;
  const checkRoleRoute = (route: RouteItem) => {
    if (role === UserRole.Admin) {
      return route.element;
    }
    return (
      <Navigate
        to={paths.pageNotFound}
        replace
      />
    );
  };
  const generateRoute = (routes: RouteItem[]) => {
    return routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={checkRoleRoute(route)}
      />
    ));
  };
  return (
    <Routes>
      {generateRoute(routes)}
      <Route
        path="*"
        element={
          <Navigate
            to={paths.pageNotFound}
            replace
          />
        }
      />
    </Routes>
  );
};

export default PrivateRoutes;
