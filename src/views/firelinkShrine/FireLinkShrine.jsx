import React from 'react'

import { FireLinkSection } from './FireLinkShrine.style';

import myself from '/images/snowy_me.png'

const FireLinkShrine = () => {
  return (
    <FireLinkSection>
      <div>
        <p>Hi, I'm</p>
        <h1>OSCAR LOPEZ ESCOBAR</h1>
      </div>
      <img src={myself} />
    </FireLinkSection>
  )
}

export default FireLinkShrine