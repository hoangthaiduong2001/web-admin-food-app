export enum UserRole {
  Admin = 'admin',
  User = 'user',
}
export interface IPlainObject {
  [key: string]: any;
}

export const sizeComponent = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  xxl: 'max-w-2xl',
  xxxl: 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  full: 'max-w-full',
};
export const apiUrl = import.meta.env.VITE_API_URL;
