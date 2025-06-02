import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import StoriesSection from '../../Dashboard/StoriesSection';
import SuggestedGroupsSection from '../../Dashboard/SuggestedGroupsSection';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout provides the overall structure for the dashboard page,
 * including a fixed header, a fixed left sidebar, a main content area, 
 * and a right sidebar for supplementary content.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <Header />
      <Sidebar />
      
      {/* Container for content to the right of the Sidebar and below the Header */}
      {/* ml-60 accounts for the w-60 Sidebar */}
      <div className="ml-60 flex">
        
        {/* Main Content Area */}
        {/* pt-[60px] accounts for the h-[60px] Header */}
        {/* flex-1 allows it to take available space */}
        {/* min-h-[calc(100vh-60px)] ensures it can fill the viewport height below the header */}
        {/* overflow-y-auto enables scrolling for main content if it overflows */}
        <main className="flex-1 pt-[60px] bg-background min-h-[calc(100vh-60px)] overflow-y-auto">
          {/* Inner div for main content padding as per layout requirements (py-6 px-4) */}
          <div className="py-6 px-4">
            {children}
          </div>
        </main>

        {/* Right Sidebar Area */}
        {/* w-60 for fixed width */}
        {/* pt-[60px] accounts for the h-[60px] Header */}
        {/* bg-surface as per layout requirements */}
        {/* border-l for separation */}
        {/* min-h-[calc(100vh-60px)] ensures it can fill the viewport height below the header */}
        {/* overflow-y-auto enables scrolling for right sidebar content if it overflows */}
        {/* hidden xl:flex flex-col: responsive visibility and flex container for its children */}
        <aside className="w-60 pt-[60px] bg-surface border-l border-border min-h-[calc(100vh-60px)] overflow-y-auto hidden xl:flex flex-col">
          {/* Inner div for padding and spacing of components within the right sidebar */}
          <div className="p-4 space-y-4 flex-grow">
            <StoriesSection />
            <SuggestedGroupsSection />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MainAppLayout;
