import React from 'react';
import Logo from './Leftcomponents/Logo';
import Home from './Leftcomponents/Home';
import Sports from './Leftcomponents/Sports';
import Tvshows from './Leftcomponents/Tvshows';
import Movies from './Leftcomponents/Movies';
import Free from './Leftcomponents/Free';
import GridIcon from './Leftcomponents/GridIcon';

import SearchIcon from './RightComponents/SearchIcon';
import Language from './RightComponents/Language';
import { LoginButton, BuyPlanButton } from './RightComponents/Button';
import Profile from './RightComponents/Profile';

const Navbar = () => {
  return (
    <header className="w-full bg-[#131219] text-white px-6 h-16 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Home />
          <Sports />
          <Tvshows />
          <Movies />
          <Free />
          <GridIcon />
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <SearchIcon />
        <Language />
        <LoginButton />
        <BuyPlanButton />
        <Profile />
      </div>
    </header>
  );
};

export default Navbar;
