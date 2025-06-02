import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Share2,
  MapPin,
  Users,
  Bookmark,
  Globe,
  Edit3,
  Trash2,
  EyeOff,
  BellOff,
  Code
} from 'lucide-react';

interface PostUser {
  name: string;
  avatarUrl: string;
  profileUrl: string;
}

interface PostLocation {
  name: string;
  type: string; // e.g., "City - United States"
  mapImageUrl: string;
  checkedInUsers?: string[]; // Names of users or count string
  saveable?: boolean;
}

export interface PostCardProps {
  id: string;
  user: PostUser;
  timeAgo: string;
  privacy?: 'public' | 'friends' | 'only_me';
  contentText?: string;
  contentImageUrl?: string;
  location?: PostLocation;
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  user,
  timeAgo,
  privacy = 'public' as const,
  contentText,
  contentImageUrl,
  location,
  stats,
  className,
}) => {
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const handleLike = () => setLiked(!liked);
  const handleSaveLocation = () => setSaved(!saved);

  const PrivacyIcon = privacy === 'public' ? Globe : Users;

  return (
    <Card className={cn('w-full bg-card shadow-sm rounded-lg', className)}>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <a href={user.profileUrl}>
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </a>
            <div>
              <a href={user.profileUrl} className="font-semibold text-sm text-primaryText hover:underline">
                {user.name}
              </a>
              {location && !contentText && (
                 <span className="text-sm text-secondaryText"> is in <a href="#" className="font-medium text-primaryText hover:underline">{location.name}</a></span>
              )}
              <div className="text-xs text-secondaryText flex items-center">
                <span>{timeAgo}</span>
                <span className="mx-1">·</span>
                <PrivacyIcon className="h-3 w-3" />
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-secondaryText">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem><Bookmark className="mr-2 h-4 w-4" /> Save post</DropdownMenuItem>
              <DropdownMenuItem><Edit3 className="mr-2 h-4 w-4" /> Edit post</DropdownMenuItem>
              <DropdownMenuItem><BellOff className="mr-2 h-4 w-4" /> Turn off notifications</DropdownMenuItem>
              <DropdownMenuItem><EyeOff className="mr-2 h-4 w-4" /> Hide post</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Code className="mr-2 h-4 w-4" /> Embed</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive hover:!bg-destructive/10">
                <Trash2 className="mr-2 h-4 w-4" /> Delete post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-0 pt-0">
        {contentText && <p className="text-sm text-primaryText mb-3 whitespace-pre-line">{contentText}</p>}
        {location && contentText && (
          <p className="text-sm text-secondaryText mb-3">
            — with <a href="#" className="font-medium text-primaryText hover:underline">Julia Fillory</a> at <a href="#" className="font-medium text-primaryText hover:underline">{location.name}</a>.
          </p>
        )}
      </CardContent>
      
      {contentImageUrl && (
        <div className="my-3 bg-black flex items-center justify-center">
            <img src={contentImageUrl} alt="Post content" className="max-h-[500px] w-auto object-contain" />
        </div>
      )}

      {location && (
        <div className="border-t border-b border-border">
          <div className="h-40 md:h-52 w-full bg-gray-200 relative">
            <img src={location.mapImageUrl} alt={`Map of ${location.name}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="font-semibold text-lg drop-shadow-sm">{location.name}</h3>
              <p className="text-xs drop-shadow-sm">{location.type}</p>
            </div>
          </div>
          {(location.checkedInUsers || location.saveable) && (
            <div className="p-3 flex items-center justify-between bg-card">
              {location.checkedInUsers && location.checkedInUsers.length > 0 && (
                <div className="flex items-center space-x-1 text-xs text-secondaryText">
                  <Users className="h-4 w-4" />
                  <span>{location.checkedInUsers.join(', ')} and {Math.floor(Math.random() * 5) + 2} others have been here</span>
                </div>
              )}
              {location.saveable && (
                <Button variant={saved ? "default" : "secondary"} size="sm" onClick={handleSaveLocation} className="h-8 text-xs">
                  <Bookmark className={cn("h-3.5 w-3.5 mr-1.5", saved && "fill-current")} /> {saved ? 'Saved' : 'Save'}
                </Button>
              )}
            </div>
          )}
        </div>
      )}

      <CardFooter className="p-2 flex flex-col items-stretch">
        {(stats.likes > 0 || stats.comments > 0 || stats.shares > 0) && (
          <div className="flex justify-between items-center text-xs text-secondaryText px-2 py-2">
            <div className="flex items-center space-x-1">
              {stats.likes > 0 && 
                <><ThumbsUp className="h-3.5 w-3.5 text-accentBlue fill-accentBlue" /> <span>{stats.likes.toLocaleString()}</span></>
              }
            </div>
            <div className="space-x-3">
              {stats.comments > 0 && <span>{stats.comments.toLocaleString()} comments</span>}
              {stats.shares > 0 && <span>{stats.shares.toLocaleString()} shares</span>}
            </div>
          </div>
        )}
        <Separator className="my-1 bg-border" />
        <div className="grid grid-cols-3 gap-1 pt-1">
          <Button variant="ghost" className="text-secondaryText hover:bg-accentGray w-full font-medium" onClick={handleLike}>
            <ThumbsUp className={cn("h-5 w-5 mr-2", liked && "text-accentBlue fill-accentBlue")} /> Like
          </Button>
          <Button variant="ghost" className="text-secondaryText hover:bg-accentGray w-full font-medium">
            <MessageCircle className="h-5 w-5 mr-2" /> Comment
          </Button>
          <Button variant="ghost" className="text-secondaryText hover:bg-accentGray w-full font-medium">
            <Share2 className="h-5 w-5 mr-2" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

PostCard.defaultProps = {
    user: {
        name: "Julia Fillory",
        avatarUrl: "https://i.pravatar.cc/40?u=JuliaFillory",
        profileUrl: "#"
    },
    timeAgo: "2 hrs",
    contentText: "Checking out some new stores downtown!",
    location: {
        name: "Raleigh, North Carolina",
        type: "City · United States",
        mapImageUrl: "https://images.unsplash.com/photo-1599071769980-058607079605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        checkedInUsers: ["Bryan Durand"],
        saveable: true
    },
    stats: {
        likes: 125,
        comments: 12,
        shares: 5
    }
};

export default PostCard;
