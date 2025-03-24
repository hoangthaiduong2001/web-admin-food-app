import { IUser } from '@/types/user';
import AvatarCore from './components/avatar';
import AvatarFallback from './components/avatarFallback';

const Avatar = ({ user }: { user: IUser }) => {
  return (
    <AvatarCore>
      <AvatarFallback>{user?.username.slice(0, 2).toUpperCase()}</AvatarFallback>
    </AvatarCore>
  );
};

export default Avatar;
