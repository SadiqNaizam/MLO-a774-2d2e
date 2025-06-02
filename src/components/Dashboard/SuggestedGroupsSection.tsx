import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Plus, X } from 'lucide-react';

interface GroupSuggestion {
  id: string;
  name: string;
  members: number;
  bannerImageUrl: string;
  mutualFriendsAvatars?: string[];
  category?: string;
}

const suggestedGroupsData: GroupSuggestion[] = [
  {
    id: 'group1',
    name: 'Mad Men (MADdicts)',
    members: 6195,
    bannerImageUrl: 'https://picsum.photos/seed/madmen/280/100',
    mutualFriendsAvatars: [
      'https://i.pravatar.cc/20?u=friend1',
      'https://i.pravatar.cc/20?u=friend2',
      'https://i.pravatar.cc/20?u=friend3',
    ],
    category: 'TV Show Fan Club'
  },
  {
    id: 'group2',
    name: 'Dexter Morgan Fans',
    members: 6984,
    bannerImageUrl: 'https://picsum.photos/seed/dexter/280/100',
    mutualFriendsAvatars: [
      'https://i.pravatar.cc/20?u=friend4',
      'https://i.pravatar.cc/20?u=friend5',
    ],
    category: 'TV Show Fan Club'
  },
  {
    id: 'group3',
    name: 'Tech Innovators Hub',
    members: 12030,
    bannerImageUrl: 'https://picsum.photos/seed/techgroup/280/100',
    category: 'Technology'
  },
];

const SuggestedGroupsSection: React.FC = () => {
  const [groups, setGroups] = React.useState(suggestedGroupsData);

  const handleDismiss = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <Card className="w-full bg-surface shadow-none border-none rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-3 pt-3">
        <CardTitle className="text-md font-semibold text-primaryText">Suggested Groups</CardTitle>
        <Button variant="link" className="text-sm text-accentBlue hover:underline px-1 h-auto py-0">See All</Button>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        {groups.map((group) => (
          <Card key={group.id} className="overflow-hidden bg-card border border-border/50 rounded-lg relative group/item">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-1 right-1 h-6 w-6 rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover/item:opacity-100 transition-opacity z-10"
              onClick={() => handleDismiss(group.id)}
              aria-label={`Dismiss ${group.name}`}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="h-24 bg-gray-300 relative">
              <img src={group.bannerImageUrl} alt={`${group.name} banner`} className="w-full h-full object-cover" />
              {group.mutualFriendsAvatars && group.mutualFriendsAvatars.length > 0 && (
                <div className="absolute bottom-1 left-2 flex -space-x-1">
                  {group.mutualFriendsAvatars.map((avatarUrl, index) => (
                    <Avatar key={index} className="h-5 w-5 border-2 border-card">
                      <AvatarImage src={avatarUrl} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold text-primaryText truncate" title={group.name}>{group.name}</h3>
              <p className="text-xs text-secondaryText">{group.members.toLocaleString()} members</p>
              {group.category && <p className="text-xs text-secondaryText mt-0.5">{group.category}</p>}
              <Button variant="secondary" className="w-full mt-2 h-8 text-sm bg-accentGray hover:bg-border">
                <Plus className="h-4 w-4 mr-1" /> Join
              </Button>
            </div>
          </Card>
        ))}
        {groups.length === 0 && (
          <p className="text-sm text-secondaryText text-center py-4">No group suggestions for now.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestedGroupsSection;
