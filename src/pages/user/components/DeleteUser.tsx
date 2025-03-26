import { useDeleteUserMutation } from '@/apis/hooks/user';
import Alert from '@/components/Alert';
import { showToast } from '@/components/Toast';
import { useState } from 'react';

const DeleteUser = ({ id, onClick }: { id: string; onClick: () => void }) => {
  const [openAlter, setOpenAlter] = useState<boolean>(false);
  const { mutate: deleteUser } = useDeleteUserMutation();
  const onSubmit = (id: string) => {
    if (id) {
      deleteUser(id, {
        onSuccess: (data) => {
          showToast({ message: data.message, type: 'success' });
          setOpenAlter(false);
        },
        onError: (error) => {
          showToast({ message: error.message, type: 'error' });
        },
      });
    } else {
      showToast({ message: 'Not found id', type: 'error' });
    }
  };
  return (
    <Alert
      description="Are you sure you want to delete this user?"
      variantTile="destructive"
      variantSubmit="destructive"
      onClick={() => onSubmit(id)}
      open={openAlter}
      setOpen={() => {
        setOpenAlter((prev) => !prev);
        onClick();
      }}
      titleAlter="Delete user"
      titleButton="Delete"
    />
  );
};

export default DeleteUser;
