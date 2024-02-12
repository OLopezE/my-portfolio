import React, { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeProvider';

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaPython
 } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5';

import MyTechStackSection from './TechStack.style';

const MyTechStack = () => {
  const { themeColor, myPalette } = useContext(ThemeContext);

  return (
    <MyTechStackSection palette={myPalette}>
      <div>
        <h2>My tech stack</h2>
        <div>
          <FaReact size={60} />
          <FaHtml5 size={60} />
          <FaCss3 size={60} />
          <IoLogoJavascript size={60} />
          <FaPython size={60} />
        </div>
      </div>
    </MyTechStackSection>
  )
}

export default MyTechStack