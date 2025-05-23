import { AiFillProduct } from 'react-icons/ai';
import { FaHome, FaShoppingCart, FaUserEdit } from 'react-icons/fa';
import { MdCategory, MdOutlinePayment, MdOutlineRateReview } from 'react-icons/md';
import { RouteItem } from '../types/route';
import { CartPage, CategoriesPage, DashboardPage, OrderPage, ProductPage, ReviewPage, UserPage } from './lazyLoad';
import { paths } from './paths';

export const routes: RouteItem[] = [
  {
    path: paths.dashboard,
    title: 'Dashboard',
    element: <DashboardPage />,
    icon: <FaHome />,
  },
  {
    path: paths.user,
    title: 'User',
    element: <UserPage />,
    icon: <FaUserEdit />,
  },
  {
    path: paths.product,
    title: 'Product',
    element: <ProductPage />,
    icon: <AiFillProduct />,
  },
  {
    path: paths.cart,
    title: 'Cart',
    element: <CartPage />,
    icon: <FaShoppingCart />,
  },
  {
    path: paths.categories,
    title: 'Categories',
    element: <CategoriesPage />,
    icon: <MdCategory />,
  },
  {
    path: paths.review,
    title: 'Review',
    element: <ReviewPage />,
    icon: <MdOutlineRateReview />,
  },
  {
    path: paths.order,
    title: 'Order',
    element: <OrderPage />,
    icon: <MdOutlinePayment />,
  },
];
