import React from 'react'

import { AboutMeSection } from './AboutMe.style';

import meAtTequila from '../../../assets/media/pictures/me_at_tequila.jpeg';

const AboutMe = () => {
  return (
    <AboutMeSection>
      <h1>Get to know me</h1>
      <div>
        <p>I started coding in 2017 when I began my career in computer science in el Tec de Monterrey. &#129312;</p>
        <p>Currently, I am living in Guadalajara City in Jalisco, working as a software engineer.</p>
        <p>In my spare time, I enjoy working out, wood working and painting. I hope one day I can be able to make myself a desk.</p>
      </div>
      <img src={meAtTequila} alt="yo mero en tequila"></img>
    </AboutMeSection>
  )
}

export default AboutMe;
