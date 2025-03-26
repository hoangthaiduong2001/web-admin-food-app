import DropdownAvatar from '@/components/DropdownAvatar';
import SidebarTrigger from '@/components/layout/Sidebar/components/sidebarTrigger';

const Header = () => {
  return (
    <div className="sticky z-50 flex w-full items-center justify-between py-2 px-4 top-0 bg-white shadow-md">
      <SidebarTrigger />
      <DropdownAvatar />
    </div>
  );
};

export default Header;
