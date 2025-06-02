import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageCircle,
  Tv2,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  ListChecks,
  HeartHandshake,
  ChevronDown,
  ChevronUp,
  Settings,
  ShieldQuestion,
  Moon, LogOut
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  isActive?: boolean;
  isSectionTitle?: boolean;
  subItems?: NavItem[];
}

const mainNavItems: NavItem[] = [
  { id: 'news-feed', label: 'News Feed', icon: Newspaper, href: '#', isActive: true },
  { id: 'messenger', label: 'Messenger', icon: MessageCircle, href: '#' },
  { id: 'watch', label: 'Watch', icon: Tv2, href: '#' },
  { id: 'marketplace', label: 'Marketplace', icon: Store, href: '#' },
];

const shortcutsItems: NavItem[] = [
  { id: 'shortcuts-title', label: 'Shortcuts', icon: Settings /* Placeholder */, href: '#', isSectionTitle: true },
  { id: 'farmville', label: 'FarmVille 2', icon: Gamepad2, href: '#' },
];

const exploreItems: NavItem[] = [
  { id: 'explore-title', label: 'Explore', icon: Settings /* Placeholder */, href: '#', isSectionTitle: true },
  { id: 'events', label: 'Events', icon: CalendarDays, href: '#' },
  { id: 'pages', label: 'Pages', icon: Flag, href: '#' },
  { id: 'groups', label: 'Groups', icon: Users, href: '#' },
  { id: 'friend-lists', label: 'Friend Lists', icon: ListChecks, href: '#' },
  { id: 'fundraisers', label: 'Fundraisers', icon: HeartHandshake, href: '#' },
];

const SidebarNav: React.FC = () => {
  const [showAllExplore, setShowAllExplore] = React.useState(false);
  const visibleExploreItems = showAllExplore ? exploreItems.slice(1) : exploreItems.slice(1, 6); // Show 5 items initially after title

  return (
    <nav className="fixed top-0 left-0 h-screen w-60 bg-sidebar text-primaryText flex flex-col pt-[76px] pb-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-sidebar">
      {/* User Profile Link */}
      <a href="#" className="flex items-center px-4 py-2 space-x-3 hover:bg-accentGray rounded-md mx-2">
        <Avatar className="h-7 w-7">
          <AvatarImage src="https://i.pravatar.cc/40?u=OlennaMason" alt="Olenna Mason" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <span className="font-semibold text-sm">Olenna Mason</span>
      </a>

      {/* Main Navigation */}
      {mainNavItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={cn(
            'flex items-center px-4 py-2 space-x-3 hover:bg-accentGray rounded-md mx-2 text-sm',
            item.isActive && 'bg-accentBlue/10 text-accentBlue font-semibold'
          )}
        >
          <item.icon className={cn('h-5 w-5', item.isActive ? 'text-accentBlue' : 'text-secondaryText')} />
          <span>{item.label}</span>
        </a>
      ))}

      <Separator className="my-2 bg-border mx-2" />

      {/* Shortcuts */}
      <div className="px-4 py-1 text-xs font-semibold text-secondaryText uppercase tracking-wider">{shortcutsItems[0].label}</div>
      {shortcutsItems.slice(1).map((item) => (
        <a key={item.id} href={item.href} className="flex items-center px-4 py-2 space-x-3 hover:bg-accentGray rounded-md mx-2 text-sm">
          <item.icon className="h-5 w-5 text-secondaryText" />
          <span>{item.label}</span>
        </a>
      ))}

      <Separator className="my-2 bg-border mx-2" />

      {/* Explore */}
      <div className="px-4 py-1 text-xs font-semibold text-secondaryText uppercase tracking-wider">{exploreItems[0].label}</div>
      {visibleExploreItems.map((item) => (
        <a key={item.id} href={item.href} className="flex items-center px-4 py-2 space-x-3 hover:bg-accentGray rounded-md mx-2 text-sm">
          <item.icon className="h-5 w-5 text-secondaryText" />
          <span>{item.label}</span>
        </a>
      ))}
      {exploreItems.length > 6 && (
        <button
          onClick={() => setShowAllExplore(!showAllExplore)}
          className="flex items-center px-4 py-2 space-x-3 hover:bg-accentGray rounded-md mx-2 text-sm w-full text-left"
        >
          {showAllExplore ? <ChevronUp className="h-5 w-5 text-secondaryText" /> : <ChevronDown className="h-5 w-5 text-secondaryText" />}
          <span>{showAllExplore ? 'See Less' : 'See More...'}</span>
        </button>
      )}
      
      {/* Footer links (simplified version based on typical FB sidebar structure) */}
      <div className="mt-auto px-4 pt-4 text-xs text-secondaryText space-x-1">
        <a href="#" className="hover:underline">Privacy</a> · 
        <a href="#" className="hover:underline">Terms</a> · 
        <a href="#" className="hover:underline">Advertising</a> · 
        <a href="#" className="hover:underline">Ad Choices</a> · 
        <a href="#" className="hover:underline">Cookies</a> · 
        More · Meta © {new Date().getFullYear()}
      </div>
    </nav>
  );
};

export default SidebarNav;
