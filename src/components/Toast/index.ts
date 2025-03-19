import { toast } from 'react-toastify';
import { IShowToast } from './type';

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
      backgroundColor: type === 'success' ? 'green' : 'red',
      color: 'white',
    },
  });
};
