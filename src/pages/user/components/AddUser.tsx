import { useCreateUserMutation } from '@/apis/hooks/user';
import Dialog from '@/components/Dialog';
import { showToast } from '@/components/Toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { defaultCreateUser } from '../const';
import { UserSchema, UserSchemaType } from '../schema';
import FormUser from './form';

const AddUser = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { mutate: createUser } = useCreateUserMutation();
  const form = useForm<UserSchemaType>({
    resolver: yupResolver(UserSchema),
    defaultValues: defaultCreateUser,
  });
  const { handleSubmit, reset } = form;
  const onSubmit = handleSubmit((data) => {
    createUser(data, {
      onSuccess: (data) => {
        showToast({ message: data.message, type: 'success' });
        setOpenDialog(false);
        reset();
      },
      onError: (error) => {
        showToast({ message: error.message, type: 'error' });
      },
    });
  });
  return (
    <div>
      <Dialog
        open={openDialog}
        setOpen={setOpenDialog}
        titleButton="Create"
        titleDialog="Create user"
        size="xxl"
        children={
          <FormUser
            form={form}
            onSubmit={onSubmit}
          />
        }
        description="Please fill filed required"
        onClick={() => {
          onSubmit();
        }}
      />
    </div>
  );
};

export default AddUser;
