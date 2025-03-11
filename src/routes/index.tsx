import PrivateLayout from '@/components/layout/privateLayout';
import PublicLayout from '@/components/layout/publicLayout';
import PageNotFound from '@/pages/pageNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './guards/PrivateRoutes';
import { LoginPage } from './lazyLoad';
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
        <Route
          path="/"
          element={<PrivateLayout />}
        >
          <Route
            path="*"
            element={<PrivateRoutes />}
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
