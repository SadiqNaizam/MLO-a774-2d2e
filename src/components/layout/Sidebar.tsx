import React from 'react';
import SidebarNav from '../../Dashboard/SidebarNav';

/**
 * Sidebar component for the main application layout.
 * It renders the primary navigation sidebar.
 */
const Sidebar: React.FC = () => {
  // SidebarNav is a self-contained fixed component handling its own styling and state.
  return <SidebarNav />;
};

export default Sidebar;
