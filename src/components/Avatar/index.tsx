import AvatarCore from './components/avatar';
import AvatarFallback from './components/avatarFallback';
import AvatarImage from './components/avatarImage';

const Avatar = ({ url }: { url: string }) => {
  return (
    <AvatarCore className="aspect-square text-center w-[100px] h-[100px] rounded-md object-cover">
      <AvatarImage src={url} />
      <AvatarFallback>{'Img'.toUpperCase()}</AvatarFallback>
    </AvatarCore>
  );
};

export default Avatar;
