import { useLogoutMutation } from '@/apis/hooks/auth';
import { RootState } from '@/store';
import { logout } from '@/store/features/auth/authSlice';
import { Root, Trigger } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { RiListSettingsFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../Alert';
import { Button } from '../Button';
import { showToast } from '../Toast';
import DropdownMenuContent from './components/dropdownMenuContent';
import DropdownMenuLabel from './components/dropdownMenuLabel';
import DropdownMenuSeparator from './components/dropdownMenuSeparator';
const DropdownAvatar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const data = useLogoutMutation();
  const handleLogout = () => {
    try {
      if (data.data?.message) {
        dispatch(logout());
        showToast({ message: data.data.message, type: 'success' });
      }
    } catch (error) {
      showToast({ message: 'Logout error', type: 'error' });
    }
  };
  return (
    <Root>
      <Trigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none focus:border-none focus-visible:border-none active:border-none "
        >
          <RiListSettingsFill style={{ height: 20, width: 20 }} />
        </Button>
      </Trigger>
      <DropdownMenuContent
        align="end"
        className="bg-neutral-100 border-none shadow-xl"
      >
        <DropdownMenuLabel className="border-b border-neutral-300">{user.username}</DropdownMenuLabel>
        <Alert
          classNameButton="p-0 hover:bg-white mt-2 active:bg-white"
          description="Are you want logout"
          onClick={handleLogout}
          open={open}
          setOpen={setOpen}
          titleAlter="Logout"
          titleButton={
            <div className="flex items-center justify-center gap-11 px-2 hover:bg-white cursor-pointer w-full">
              Logout
              <FiLogOut />
            </div>
          }
          variantTile="text"
          variantSubmit="destructive"
        />
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </Root>
  );
};

export default DropdownAvatar;
