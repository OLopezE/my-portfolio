import React from 'react'

import { Link } from 'react-router-dom';

import {
  ContactLink,
  HomeLink,
  NavigationBar,
  FeaturedLinks
} from './Navbar.style';

const Navbar = () => {
  return (
    <NavigationBar>
      <HomeLink to="/">
        Home
      </HomeLink>
      <FeaturedLinks>
        <Link to="/work-experience">My experience</Link>
        <Link to="/portfolio">Personal Projects</Link>
        <Link to="/about-me">About me</Link>
      </FeaturedLinks>
      <ContactLink to="/contact-me">Contact me</ContactLink>
    </NavigationBar>
  )
}

export default Navbar;
