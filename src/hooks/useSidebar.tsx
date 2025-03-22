import { SidebarContextProps } from '@/components/Sidebar/type';
import { createContext, useContext } from 'react';

export const SidebarContext = createContext<SidebarContextProps | null>(null);

const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }

  return context;
};

export default useSidebar;
