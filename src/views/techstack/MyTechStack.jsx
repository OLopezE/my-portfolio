import React from 'react'

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaPython
 } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5';

import MyTechStackSection from './TechStack.style';

const MyTechStack = () => {
  return (
    <MyTechStackSection>
      <FaReact />
      <FaHtml5 />
      <FaCss3 />
      <IoLogoJavascript />
      <FaPython />
    </MyTechStackSection>
  )
}

export default MyTechStack