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
        <Link to="/work-experience">&#129299; My experience</Link>
        <Link to="/portfolio">&#128187; Personal Projects</Link>
        <Link to="/about-me">&#9757; About me</Link>
      </FeaturedLinks>

      <ContactLink to="/contact-me">Contact me &#9997;</ContactLink>
    </NavigationBar>
  )
}

export default Navbar;
