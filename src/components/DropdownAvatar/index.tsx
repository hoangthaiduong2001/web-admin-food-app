import { RootState } from '@/store';
import { Root, Trigger } from '@radix-ui/react-dropdown-menu';
import { FiLogOut } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Avatar from '../Avatar';
import { Button } from '../Button';
import DropdownMenuContent from './components/dropdownMenuContent';
import DropdownMenuItem from './components/dropdownMenuItem';
import DropdownMenuLabel from './components/dropdownMenuLabel';
import DropdownMenuSeparator from './components/dropdownMenuSeparator';
const DropdownAvatar = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Root>
      <Trigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full border focus:border-none focus:outline-none"
        >
          <Avatar user={user} />
        </Button>
      </Trigger>
      <DropdownMenuContent
        align="end"
        className="bg-neutral-100 border-none shadow-xl"
      >
        <DropdownMenuLabel className="border-b border-neutral-300">{user.username}</DropdownMenuLabel>
        <DropdownMenuItem className="flex items-center justify-between">
          Logout
          <FiLogOut />
        </DropdownMenuItem>

        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </Root>
  );
};

export default DropdownAvatar;
