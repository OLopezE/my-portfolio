import React, { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeProvider';

import { FireLinkSection } from './FireLinkShrine.style';

import myself from '/images/snowy_me.png'

const FireLinkShrine = () => {
  const { themeColor, myPalette } = useContext(ThemeContext);

  return (
    <FireLinkSection palette={myPalette}>
      <div>
        <p>Hi, I'm</p>
        <h1>OSCAR LÓPEZ ESCOBAR</h1>
        <h2>Welcome to my portfolio</h2>
      </div>
      <img src={myself} alt="me at sandia tramway"/>
    </FireLinkSection>
  )
}

export default FireLinkShrine