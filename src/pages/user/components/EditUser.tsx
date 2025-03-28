import { useUpdateUserMutation } from '@/apis/hooks/user';
import Dialog from '@/components/Dialog';
import { showToast } from '@/components/Toast';
import { IUser } from '@/types/user';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserSchema, UserSchemaType } from '../schema';
import FormUser from './form';

const EditUser = ({ user, onClick }: { user: IUser; onClick: () => void }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { mutate: updateUser } = useUpdateUserMutation({ id: user._id });
  const form = useForm<UserSchemaType>({
    resolver: yupResolver(UserSchema),
    values: {
      username: user.username || '',
      address: user.address || '',
      email: user.email || '',
      phone: user.phone || '',
    },
  });
  const { handleSubmit, reset } = form;
  const onSubmit = handleSubmit((data) => {
    if (user._id) {
      const userData = { ...data, password: data.password || '' };
      updateUser(userData, {
        onSuccess: (data) => {
          showToast({ message: data.message, type: 'success' });
          setOpenDialog(false);
          reset();
        },
        onError: (error) => {
          showToast({ message: error.message, type: 'error' });
        },
      });
    } else {
      showToast({ message: 'Not found id', type: 'error' });
    }
  });
  return (
    <Dialog
      open={openDialog}
      setOpen={() => {
        setOpenDialog((prev) => !prev);
        onClick();
      }}
      variantButton="contained"
      titleButton="Update"
      titleDialog="Update user"
      size="xxl"
      children={
        <FormUser
          user={user}
          form={form}
          onSubmit={onSubmit}
        />
      }
      description="Please fill filed required"
      onClick={() => {
        onSubmit();
      }}
    />
  );
};

export default EditUser;
