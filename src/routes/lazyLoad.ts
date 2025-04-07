import { lazy } from 'react';

export const LoginPage = lazy(() => import('../pages/login/'));
export const DashboardPage = lazy(() => import('../pages/dashboard'));
export const UserPage = lazy(() => import('../pages/user'));
export const ProductPage = lazy(() => import('../pages/products'));
export const CartPage = lazy(() => import('../pages/cart'));
export const CategoriesPage = lazy(() => import('../pages/categories'));
export const ReviewPage = lazy(() => import('../pages/review'));
export const OrderPage = lazy(() => import('../pages/order'));
