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
      <h2>About me</h2>
      <div>
        <p>I am a {getAge(new Date())} year old software engineer proudly from Chihuahua, Mexico. I have also lived in Monterrey and Guadalajara (currently living here).</p>
        <p>I started coding in 2017 when I started college in Tec de Monterrey. My graduation was in december 2021 and since then I have been working in 100 Ladrillos as a frontend software engineer.</p>
        <p>My main focus these days is learning and applying all I can about good software engineering such as principles and design patterns. I try to conceive well thought code solving difficult tasks in creative yet simple ways!</p>
      </div>
    </MeetMeSection>
  )
}

export default MeetMe