import { routes } from '@/routes/routes';
import { IoLogoAmplify } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar';
import SidebarContent from './components/sidebarContent';
import SidebarGroup from './components/sidebarGroup';
import SidebarGroupContent from './components/sidebarGroupContent';
import SidebarMenu from './components/sidebarMenu';
import SidebarMenuButton from './components/sidebarMenuButton';
import SidebarMenuItem from './components/sidebarMenuItem';

const AppSidebar = () => {
  const location = useLocation();
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="h-full"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <IoLogoAmplify
              className="ml-1 mb-5 text-black"
              size="25"
            />
            <SidebarMenu>
              {routes.map((route) => {
                const isActive = location.pathname === route.path;
                return (
                  <SidebarMenuItem key={route.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={route.path}
                        className={`flex items-center gap-2 ${
                          isActive ? 'text-black font-semibold' : 'text-gray-600'
                        } hover:text-black`}
                      >
                        {route.icon}
                        <span>{route.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
