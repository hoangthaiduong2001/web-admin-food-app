import { routes } from '@/routes/routes';
import { IoLogoAmplify } from 'react-icons/io5';
import Sidebar from './components/sidebar';
import SidebarContent from './components/sidebarContent';
import SidebarGroup from './components/sidebarGroup';
import SidebarGroupContent from './components/sidebarGroupContent';
import SidebarMenu from './components/sidebarMenu';
import SidebarMenuButton from './components/sidebarMenuButton';
import SidebarMenuItem from './components/sidebarMenuItem';

const AppSidebar = () => {
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <IoLogoAmplify
              className="ml-1 mb-5 text-black"
              size="25"
            />
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={route.path}
                      className="hover:text-black"
                    >
                      {route.icon}
                      <span>{route.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
