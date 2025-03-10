import PrivateLayout from '@/components/layout/privateLayout';
import PublicLayout from '@/components/layout/publicLayout';
import PageNotFound from '@/pages/pageNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardPage, LoginPage } from './lazyLoad';
import { paths } from './paths';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route
            path={paths.login}
            element={<LoginPage />}
          />
        </Route>
        {/* <Route
          path="/dashboard"
          element={<DashboardPage />}
        /> */}
        <Route
          path="/"
          element={<PrivateLayout />}
        >
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />
          <Route
            path="*"
            element={<>Privivate</>}
          />
        </Route>
        <Route
          path={paths.pageNotFound}
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
