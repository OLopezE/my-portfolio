import React, { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeProvider';

import { MeetMeSection } from './MeetMe.style';
import myself from '/images/me_at_barrancas.png'

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
      <div>
        <h2>About me</h2>
        <p>I am a {getAge(new Date())} year old software engineer proudly from Chihuahua, Mexico. I have also lived in Monterrey and (currently) Guadalajara.</p>
        <p>Among my favorite activies are hiking, painting with watercolor, skateboarding, woodworking and eating burguers.</p>
        <p>My journey coding began in 2017 when I started college in Tec de Monterrey. My graduation was in december 2021 and since then I have been working in a <a href='https://100ladrillos.com/' target='_blank'>fintech startup</a> as a frontend software engineer.</p>
        <p>My main focus these days is learning and applying all I can about good software engineering such as principles and design patterns. I try to conceive well thought code solving difficult tasks in creative yet simple ways!</p>
      </div>
      <img src={myself} alt="me at las barrancas del cobre" />
    </MeetMeSection>
  )
}

export default MeetMe