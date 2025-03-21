import { IPlainObject } from '@/types/common';
import { toast } from 'react-toastify';
import { IShowToast } from './type';

const objectTypeToast: IPlainObject = {
  success: 'green',
  error: 'red',
  warning: 'orange',
};

export const showToast = ({ message, type }: IShowToast) => {
  toast.dark(message, {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: 0,
    style: {
      backgroundColor: objectTypeToast[type],
      color: 'white',
    },
  });
};
