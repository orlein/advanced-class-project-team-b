import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SidebarMenuButton, useSidebar } from './sidebar';
import { Button } from '@/components/ui/button';

interface BaseMenuItemProps {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

interface LinkMenuItemProps extends BaseMenuItemProps {
  type: 'link';
  to: string;
}

interface ButtonMenuItemProps extends BaseMenuItemProps {
  type: 'button';
  onClick: () => void;
}

type SidebarLinkProps = LinkMenuItemProps | ButtonMenuItemProps;

const SidebarLink = (props: SidebarLinkProps) => {
  const { icon: Icon, children, className } = props;
  const { setOpenMobile } = useSidebar();

  const handleClick = () => {
    setOpenMobile(false); // 모바일 버전에서 메뉴 클릭 시 사이드바 닫기
  };

  const commonClasses = cn('flex items-center justify-start w-full gap-4 px-2 py-2', className);

  if (props.type === 'button') {
    return (
      <SidebarMenuButton asChild>
        <Button variant="ghost" onClick={props.onClick} className={commonClasses}>
          <Icon className="w-5 h-5" />
          <span>{children}</span>
        </Button>
      </SidebarMenuButton>
    );
  }

  return (
    <SidebarMenuButton asChild>
      <Link to={props.to} onClick={handleClick} className={commonClasses}>
        <Icon className="w-5 h-5" />
        <span>{children}</span>
      </Link>
    </SidebarMenuButton>
  );
};

export default SidebarLink;
