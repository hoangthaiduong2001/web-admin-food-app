export enum UserRole {
  Admin = 'admin',
  User = 'user',
}
export interface IPlainObject {
  [key: string]: any;
}

export const apiUrl = import.meta.env.VITE_API_URL;
