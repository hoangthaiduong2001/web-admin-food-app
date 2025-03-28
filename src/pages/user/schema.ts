import { InferType, object, string } from 'yup';

export const UserSchema = object({
  username: string().required('Username is required'),
  address: string().required('Address is required'),
  phone: string().required('Phone number is required'),
  email: string().email('Email is invalid').required('Email is required'),
  password: string().min(6, 'Password min 6 character').required('Password is required').optional(),
});

export type UserSchemaType = InferType<typeof UserSchema>;
