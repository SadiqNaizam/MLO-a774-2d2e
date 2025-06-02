import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Facebook,
  Search,
  Home,
  UserPlus,
  Users,
  MessageSquare,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  ChevronDown,
  Moon // Assuming for dark mode toggle or other settings
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
}

interface IconNavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  badgeCount?: number;
}

const mainNavLinks: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home, href: '#', isActive: true },
  { id: 'find-friends', label: 'Find Friends', icon: UserPlus, href: '#' },
];

const iconNavItems: IconNavItem[] = [
  { id: 'friends', label: 'Friend Requests', icon: Users, href: '#', badgeCount: 8 },
  { id: 'messenger', label: 'Messenger', icon: MessageSquare, href: '#', badgeCount: 0 }, // Example no badge
  { id: 'notifications', label: 'Notifications', icon: Bell, href: '#', badgeCount: 36 },
  { id: 'help', label: 'Help', icon: HelpCircle, href: '#' },
];

const TopHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-surface text-primaryText flex items-center justify-between px-4 shadow-sm z-50">
      {/* Left Section: Logo and Search */}
      <div className="flex items-center space-x-2">
        <a href="#" aria-label="Facebook home">
          <Facebook className="h-10 w-10 text-accentBlue" />
        </a>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondaryText" />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="pl-9 pr-3 py-2 h-10 w-60 rounded-full bg-background border-none focus-visible:ring-accentBlue focus-visible:ring-2"
          />
        </div>
      </div>

      {/* Center Section: Navigation Links (Based on image) */}
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-sm text-primaryText hidden md:block">Olenna</span>
        {mainNavLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            className={cn(
              'px-6 py-3 rounded-lg hover:bg-accentGray text-sm font-medium flex items-center space-x-2',
              item.isActive ? 'text-accentBlue border-b-2 border-accentBlue rounded-none' : 'text-secondaryText'
            )}
          >
            <item.icon className={cn('h-6 w-6', item.isActive ? 'text-accentBlue' : 'text-secondaryText')} />
            <span className="hidden lg:block">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Right Section: Icon Navigation and Profile Dropdown */}
      <div className="flex items-center space-x-1">
        {iconNavItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10 relative hover:bg-accentGray"
            aria-label={item.label}
          >
            <item.icon className="h-5 w-5 text-primaryText" />
            {item.badgeCount && item.badgeCount > 0 && (
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 text-xs flex items-center justify-center rounded-full">
                {item.badgeCount > 99 ? '99+' : item.badgeCount}
              </Badge>
            )}
          </Button>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-accentGray">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://i.pravatar.cc/40?u=OlennaMason" alt="Olenna Mason" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              {/* <ChevronDown className="h-4 w-4 text-secondaryText ml-1" /> */}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-60">
            <DropdownMenuLabel>
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://i.pravatar.cc/40?u=OlennaMason" alt="Olenna Mason" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Olenna Mason</div>
                  <div className="text-xs text-secondaryText">See your profile</div>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings & Privacy</DropdownMenuItem>
            <DropdownMenuItem><HelpCircle className="mr-2 h-4 w-4" /> Help & Support</DropdownMenuItem>
            <DropdownMenuItem><Moon className="mr-2 h-4 w-4" /> Display & Accessibility</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /> Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
