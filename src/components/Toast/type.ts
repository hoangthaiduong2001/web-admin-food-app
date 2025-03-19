type TypeToast = 'error' | 'success';

export interface IShowToast {
  message: string;
  type: TypeToast;
}
