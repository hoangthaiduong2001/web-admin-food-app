import { useGetUserById, useUpdateUserMutation } from '@/apis/hooks/user';
import Dialog from '@/components/Dialog';
import { showToast } from '@/components/Toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserSchema, UserSchemaType } from '../schema';
import FormUser from './form';

const EditUser = ({ id, onClick }: { id: string; onClick: () => void }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { mutate: updateUser } = useUpdateUserMutation({ id });
  const { data } = useGetUserById({ id });
  const form = useForm<UserSchemaType>({
    resolver: yupResolver(UserSchema),
    values: {
      username: data?.data?.username || '',
      address: data?.data?.address || '',
      email: data?.data?.email || '',
      password: data?.data?.password || '',
      phone: data?.data?.phone || '',
    },
  });
  const { handleSubmit, reset } = form;
  const onSubmit = handleSubmit((data) => {
    if (id) {
      updateUser(data, {
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
          id={id}
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
