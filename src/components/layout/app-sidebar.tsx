import { Home, Dumbbell, Users, LogIn, LogOut, Settings, LucideIcon } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import SidebarLink from '../ui/sidebar-link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/RTK/store';
import { logout } from '@/RTK/authSlice';

interface BaseMenuItem {
  title: string;
  icon: LucideIcon;
}

interface LinkMenuItem extends BaseMenuItem {
  type: 'link';
  to: string;
}

interface ButtonMenuItem extends BaseMenuItem {
  type: 'button';
  onClick: () => void;
}

type MenuItem = LinkMenuItem | ButtonMenuItem;

const mainMenuItems: MenuItem[] = [
  { type: 'link', title: '홈', to: '/', icon: Home },
  { type: 'link', title: '챌린지', to: '/challenges', icon: Dumbbell },
  { type: 'link', title: '커뮤니티', to: '/posts', icon: Users },
];

const AppSidebar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn); // 로그인 상태 가져오기

  const handleLogout = () => {
    dispatch(logout());
  };

  const authMenuItem: MenuItem = isLoggedIn
    ? {
        type: 'button',
        title: '로그아웃',
        icon: LogOut,
        onClick: handleLogout,
      }
    : {
        type: 'link',
        title: '로그인',
        to: '/sign-in',
        icon: LogIn,
      };

  const subMenuItems: MenuItem[] = [
    {
      type: 'link',
      title: '설정',
      to: '/settings',
      icon: Settings,
    },
    authMenuItem,
  ];

  return (
    <Sidebar>
      <SidebarHeader>운동커뮤니T</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  {item.type === 'link' ? (
                    <SidebarLink type="link" to={item.to} icon={item.icon}>
                      {item.title}
                    </SidebarLink>
                  ) : (
                    <SidebarLink type="button" onClick={item.onClick} icon={item.icon}>
                      {item.title}
                    </SidebarLink>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {subMenuItems.map(item => (
            <SidebarMenuItem key={item.title}>
              {item.type === 'link' ? (
                <SidebarLink type="link" to={item.to} icon={item.icon}>
                  {item.title}
                </SidebarLink>
              ) : (
                <SidebarLink type="button" onClick={item.onClick} icon={item.icon}>
                  {item.title}
                </SidebarLink>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
