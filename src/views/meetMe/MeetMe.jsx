import React, { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeProvider';

import { MeetMeSection } from './MeetMe.style';
import myself from '/images/me_tequila.jpeg'

const MeetMe = () => {
  const { themeColor, myPalette } = useContext(ThemeContext);

  const getAge = today => {
    let birthDate = new Date('1998-11-18');
    let timeDiff = today - birthDate;

    let age = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));

    return age;
  };

  return (
    <MeetMeSection palette={myPalette}>
      <h2>Meet Oscar</h2>
      <div>
        <img src={myself} alt="handsome Oscar Lopez at Tequila" />
        <p>I am a {getAge(new Date())} year old software engineer from Chihuahua, Mexico. React enjoyer, but also a fan of reading about good practices and design patterns.</p>
      </div>
    </MeetMeSection>
  )
}

export default MeetMe