import { FaCalendar, FaHome, FaInbox, FaSearch } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import Sidebar from './components/sidebar';
import SidebarContent from './components/sidebarContent';
import SidebarGroup from './components/sidebarGroup';
import SidebarGroupContent from './components/sidebarGroupContent';
import SidebarGroupLabel from './components/sidebarGroupLabel';
import SidebarMenu from './components/sidebarMenu';
import SidebarMenuButton from './components/sidebarMenuButton';
import SidebarMenuItem from './components/sidebarMenuItem';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: FaHome,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: FaInbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: FaCalendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: FaSearch,
  },
  {
    title: 'Settings',
    url: '#',
    icon: IoMdSettings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>1</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
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
}
