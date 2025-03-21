import { InferType, object, string } from 'yup';

export const LoginSchema = object({
  username: string().required('Username is required'),
  password: string().min(6, 'Password min 6 character').required('Password is required'),
});

export type LoginSchemaType = InferType<typeof LoginSchema>;
