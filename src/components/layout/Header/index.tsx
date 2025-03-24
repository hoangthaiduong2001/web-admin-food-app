import DropdownAvatar from '@/components/DropdownAvatar';
import SidebarTrigger from '@/components/layout/Sidebar/components/sidebarTrigger';

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between py-2 px-4">
      <SidebarTrigger />
      <DropdownAvatar />
    </div>
  );
};

export default Header;
