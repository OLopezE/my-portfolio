import React, { useContext } from 'react'
import { ThemeContext } from './theme/ThemeProvider';

import Main from './App.style';
import { FireLinkShrine, MeetMe, ContactMe } from './views';

const MyApp = () => {
  const { themeColor, myPalette } = useContext(ThemeContext);

  return (
    <Main palette={myPalette}>
      <FireLinkShrine />
      <MeetMe />
      {/* <ContactMe /> */}
    </Main>
  )
}

export default MyApp