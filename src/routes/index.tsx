import PageNotFound from '@/pages/pageNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoutes from './guards/PublicRoutes';
import { DashboardPage, LoginPage } from './lazyLoad';
import { paths } from './paths';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route
            path={paths.login}
            element={<LoginPage />}
          />
        </Route>
        <Route
          path={paths.pageNotFound}
          element={<PageNotFound />}
        />
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
