import React from 'react'

import { Link } from 'react-router-dom';

import {
  HomeLinkWrapper,
  NavigationBar,
  FeaturedLinks
} from './Navbar.style';

const Navbar = () => {
  return (
    <NavigationBar>
      <HomeLinkWrapper to="/">
        Home
      </HomeLinkWrapper>
      <FeaturedLinks>
        <Link to="/">My experience</Link>
        <Link to="/">Personal Projects</Link>
        <Link to="/">About me</Link>
      </FeaturedLinks>
      <div>Contact me</div>
    </NavigationBar>
  )
}

export default Navbar;
