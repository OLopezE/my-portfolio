import React, { Fragment, useState } from 'react'

import { Link } from 'react-router-dom';

import {
  NavigateOptions,
  NavigationBar
} from './Navbar.style';

const Navbar = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation)
  };

  return (
    <Fragment>
      <NavigationBar>
        <button
          onClick={toggleNavigation}
          >
          <span />
          <span />
          <span />
        </button>
        <NavigateOptions visible={showNavigation}>
          <Link to="/" onClick={toggleNavigation}>Home</Link>
          <Link to="/work-experience" onClick={toggleNavigation}>My experience &#129299;</Link>
          <Link to="/portfolio" onClick={toggleNavigation}>Personal Projects &#128187;</Link>
          <Link to="/about-me" onClick={toggleNavigation}>About me &#9757;</Link>
          <Link to="/contact-me" onClick={toggleNavigation}>Contact me &#9997;</Link>
        </NavigateOptions>
      </NavigationBar>
    </Fragment>
  )
}

export default Navbar;
