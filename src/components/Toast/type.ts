type TypeToast = 'error' | 'success' | 'warning';

export interface IShowToast {
  message: string;
  type: TypeToast;
}
