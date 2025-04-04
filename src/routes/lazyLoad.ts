import React from 'react';

export const LoginPage = React.lazy(() => import('../pages/login/'));
export const DashboardPage = React.lazy(() => import('../pages/dashboard'));
export const UserPage = React.lazy(() => import('../pages/user'));
export const ProductPage = React.lazy(() => import('../pages/products'));
export const CartPage = React.lazy(() => import('../pages/cart'));
export const CategoriesPage = React.lazy(() => import('../pages/categories'));
export const ReviewPage = React.lazy(() => import('../pages/review'));
