import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlusCircle, Archive, Settings } from 'lucide-react';

interface Story {
  id: string;
  userName: string;
  userAvatarUrl: string;
  storyImageUrl: string;
  viewed?: boolean;
}

const storiesData: Story[] = [
  {
    id: 'story1',
    userName: 'Jane Doe',
    userAvatarUrl: 'https://i.pravatar.cc/40?u=JaneDoe',
    storyImageUrl: 'https://picsum.photos/seed/story1/200/300',
    viewed: false,
  },
  {
    id: 'story2',
    userName: 'John Smith',
    userAvatarUrl: 'https://i.pravatar.cc/40?u=JohnSmith',
    storyImageUrl: 'https://picsum.photos/seed/story2/200/300',
    viewed: true,
  },
  {
    id: 'story3',
    userName: 'Alice Brown',
    userAvatarUrl: 'https://i.pravatar.cc/40?u=AliceBrown',
    storyImageUrl: 'https://picsum.photos/seed/story3/200/300',
  },
];

const StoriesSection: React.FC = () => {
  return (
    <Card className="w-full bg-surface shadow-none border-none rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-3 pt-3">
        <CardTitle className="text-md font-semibold text-primaryText">Stories</CardTitle>
        <div className="space-x-1">
          <Button variant="ghost" size="sm" className="text-xs text-secondaryText hover:bg-accentGray px-2 py-1 h-auto">
            <Archive className="h-3.5 w-3.5 mr-1" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-secondaryText hover:bg-accentGray px-2 py-1 h-auto">
            <Settings className="h-3.5 w-3.5 mr-1" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <div className="space-y-3">
          <Card className="overflow-hidden hover:shadow-md transition-shadow bg-card">
            <div className="relative h-40 flex flex-col items-center justify-end bg-gray-200">
              <img 
                src="https://i.pravatar.cc/80?u=OlennaMasonAddStory" 
                alt="Add to story background" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative p-2 text-center">
                <Button variant="outline" className="bg-accentBlue hover:bg-accentBlue/90 border-none text-white rounded-full h-10 w-10 p-0 absolute -top-5 left-1/2 -translate-x-1/2 shadow-md">
                  <PlusCircle className="h-6 w-6" />
                </Button>
                <p className="text-xs font-medium text-primaryText mt-4">Add to Your Story</p>
                <p className="text-xs text-secondaryText">Share a photo, video or write something</p>
              </div>
            </div>
          </Card>

          {/* Placeholder for actual stories list, as the image doesn't show individual story items beyond 'Add to Story' */}
          {/* If individual stories were to be displayed, it would look like this: */}
          {storiesData.slice(0, 1).map((story) => (
            <div key={story.id} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accentGray cursor-pointer">
              <Avatar className={cn("h-10 w-10 border-2", story.viewed ? "border-gray-300" : "border-accentBlue")}>
                <AvatarImage src={story.userAvatarUrl} alt={story.userName} />
                <AvatarFallback>{story.userName.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-primaryText">{story.userName}</p>
                <p className="text-xs text-secondaryText">Shared 2h ago</p>
              </div>
            </div>
          ))}
          {storiesData.length === 0 && (
             <p className="text-sm text-secondaryText text-center py-4">No stories to show right now.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StoriesSection;
