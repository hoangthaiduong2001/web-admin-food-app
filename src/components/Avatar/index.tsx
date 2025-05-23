import AvatarCore from './components/avatar';
import AvatarFallback from './components/avatarFallback';
import AvatarImage from './components/avatarImage';
import { urlImageProductDefault } from './const';

const Avatar = ({ url, onClick }: { url: string; onClick?: () => void }) => {
  return (
    <AvatarCore
      className="aspect-square text-center w-[100px] h-[100px] rounded-md object-cover cursor-pointer"
      onClick={onClick}
    >
      <AvatarImage src={url || urlImageProductDefault} />
      <AvatarFallback>{'Img'.toUpperCase()}</AvatarFallback>
    </AvatarCore>
  );
};

export default Avatar;
