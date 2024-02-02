import React from 'react'
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaRegEnvelope
} from "react-icons/fa";

import ContactMeMomo from './ContactMe.style';

//get svgs and make them cool with a hover effect!!!

const ContactMe = () => {
  return (
    <ContactMeMomo>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/olopeze/' target='_blank'>
            <FaLinkedin size={30}/>
          </a>
        </li>

        <li>
          <a href='https://github.com/OLopezE' target='_blank'>
            <FaGithub size={30}/>
          </a>
        </li>

        <li>
          <a href='https://www.instagram.com/oscarlopezescobar/' target='_blank'>
            <FaInstagram size={30}/>
          </a>
        </li>

        <li>
          <a href='https://www.tiktok.com/@olopezdev' target='_blank'>
            <FaTiktok size={30}/>
          </a>
        </li>

        <li>
          <a href='https://www.facebook.com/profile.php?id=100081211506994' target='_blank'>
            <FaFacebook size={30}/>
          </a>
        </li>

        <li>
          <a href='mailto: oscarfco1998@gmail.com' target='_blank'>
            <FaRegEnvelope size={30}/>
          </a>
        </li>
      </ul>
    </ContactMeMomo>
  )
}

export default ContactMe