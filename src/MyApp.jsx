import React, { useContext } from 'react'
import { ThemeContext } from './theme/ThemeProvider';

import Main from './App.style';
import {
  Building,
  FireLinkShrine,
  MeetMe,
  ContactMe
} from './views';

const MyApp = () => {
  const { themeColor, myPalette } = useContext(ThemeContext);

  return (
    <Main palette={myPalette}>
      <FireLinkShrine />
      <MeetMe />
      <Building />
      <ContactMe />
    </Main>
  )
}

export default MyApp