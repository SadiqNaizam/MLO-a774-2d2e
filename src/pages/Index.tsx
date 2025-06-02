import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PostCard, { PostCardProps } from '../components/Dashboard/PostCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Video, ImagePlus, SmilePlus } from 'lucide-react';

// Dummy data for PostCards
const currentUser = {
  name: "Olenna Mason",
  avatarUrl: "https://i.pravatar.cc/40?u=OlennaMason",
  profileUrl: "#profile-olenna"
};

const postsData: PostCardProps[] = [
  {
    id: 'post1-olenna-sunset',
    user: currentUser,
    timeAgo: '1h ago',
    privacy: 'public' as const,
    contentText: 'Beautiful sunset at the beach today! 🌅 Enjoying the last rays of sun. Feeling grateful for these moments. #blessed #sunsetlovers #beachlife',
    contentImageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    stats: {
      likes: 256,
      comments: 32,
      shares: 15,
    },
  },
  {
    id: 'post2-julia-raleigh',
    user: {
        name: "Julia Fillory",
        avatarUrl: "https://i.pravatar.cc/40?u=JuliaFillory",
        profileUrl: "#profile-julia"
    },
    timeAgo: "2 hrs ago",
    privacy: 'friends' as const,
    contentText: "Checking out some new stores downtown! Found some amazing deals and unique crafts. Raleigh has so much to offer!",
    location: {
        name: "Raleigh, North Carolina",
        type: "City · United States" as const,
        mapImageUrl: "https://images.unsplash.com/photo-1599071769980-058607079605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        checkedInUsers: ["Bryan Durand"],
        saveable: true
    },
    stats: {
        likes: 125,
        comments: 12,
        shares: 5
    }
  },
  {
    id: 'post3-john-book',
    user: {
      name: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/40?u=JohnDoe',
      profileUrl: '#profile-john',
    },
    timeAgo: '5h ago',
    privacy: 'friends' as const,
    contentText: "Just finished an amazing book: 'The Alchemist' by Paulo Coelho. It's a truly inspiring story about following your dreams and listening to your heart. Has anyone else read it? What were your thoughts? Highly recommend it for a weekend read!",
    stats: {
      likes: 98,
      comments: 22,
      shares: 7,
    },
  },
  {
    id: 'post4-alice-puppy',
    user: {
      name: 'Alice Brown',
      avatarUrl: 'https://i.pravatar.cc/40?u=AliceBrown',
      profileUrl: '#profile-alice',
    },
    timeAgo: 'Yesterday at 8:17 PM',
    privacy: 'public' as const,
    contentText: 'My new puppy is just the cutest! Everyone, meet Max. 🐶❤️ He loves belly rubs and chasing squirrels in the park (even if he never catches them). So much joy in such a small package!',
    contentImageUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80',
    stats: {
      likes: 530,
      comments: 78,
      shares: 42,
    },
  },
];

const HomepageDashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="max-w-xl mx-auto w-full px-0 md:px-0"> {/* Centered content column for feed */}
        {/* Create Post Section */}
        <div className="bg-card p-3 sm:p-4 rounded-lg shadow-sm mb-4">
          <div className="flex items-center space-x-3 pb-3 border-b border-border">
            <a href={currentUser.profileUrl} aria-label={`${currentUser.name}'s profile`}>
              <Avatar className="h-10 w-10">
                <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </a>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-left text-secondaryText bg-accentGray hover:bg-border/80 rounded-full h-10 px-4 text-sm"
              onClick={() => alert('Open create post modal/dialog - Not implemented')}
            >
              What's on your mind, {currentUser.name.split(' ')[0]}?
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-1 pt-3">
            <Button variant="ghost" className="text-secondaryText hover:bg-accentGray font-medium text-xs sm:text-sm">
              <Video className="h-5 w-5 mr-1.5 sm:mr-2 text-red-500" /> Live video
            </Button>
            <Button variant="ghost" className="text-secondaryText hover:bg-accentGray font-medium text-xs sm:text-sm">
              <ImagePlus className="h-5 w-5 mr-1.5 sm:mr-2 text-green-500" /> Photo/video
            </Button>
            <Button variant="ghost" className="text-secondaryText hover:bg-accentGray font-medium text-xs sm:text-sm">
              <SmilePlus className="h-5 w-5 mr-1.5 sm:mr-2 text-yellow-500" /> Feeling/activity
            </Button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="flex flex-col gap-4">
          {postsData.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              user={post.user}
              timeAgo={post.timeAgo}
              privacy={post.privacy}
              contentText={post.contentText}
              contentImageUrl={post.contentImageUrl}
              location={post.location}
              stats={post.stats}
            />
          ))}
        </div>
      </div>
    </MainAppLayout>
  );
};

export default HomepageDashboardPage;
