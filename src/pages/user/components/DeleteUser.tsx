import { useDeleteUserMutation } from '@/apis/hooks/user';
import Alert from '@/components/Alert';
import { showToast } from '@/components/Toast';
import { IUser } from '@/types/user';
import { useState } from 'react';

const DeleteUser = ({ user, onClick }: { user: IUser; onClick: () => void }) => {
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
      description={
        <>
          Are you sure you want to delete this user:
          <span className="font-bold"> {user.username}?</span>
        </>
      }
      variantTile="destructive"
      variantSubmit="destructive"
      onClick={() => onSubmit(user._id)}
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
