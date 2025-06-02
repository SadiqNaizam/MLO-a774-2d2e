import React from 'react';
import TopHeader from '../../Dashboard/TopHeader';

/**
 * Header component for the main application layout.
 * It renders the main top header of the application.
 */
const Header: React.FC = () => {
  // TopHeader is a self-contained fixed component handling its own styling and state.
  return <TopHeader />;
};

export default Header;
