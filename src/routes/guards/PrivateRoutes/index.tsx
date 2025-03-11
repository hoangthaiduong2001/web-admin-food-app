import { getUserInfo } from '@/config/storage';
import { paths } from '@/routes/paths';
import { routes } from '@/routes/routes';
import { UserRole } from '@/types/common';
import { RouteItem } from '@/types/route';
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoutes = () => {
  const user = getUserInfo();
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
