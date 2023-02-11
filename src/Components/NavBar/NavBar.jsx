import './NavBar.css';
import React, { useState } from 'react';
import HomePageNavBar from '../HomePageNavBar/HomePageNavBar';
import SearchNavBar from '../SearchNavBar/SearchNavBar';
import MainNavBar from '../MainNavBar/MainNavBar';

const NavBar = () => {
  // const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <HomePageNavBar />  
      <SearchNavBar />
      <MainNavBar />
    </>
  )
}

export default NavBar