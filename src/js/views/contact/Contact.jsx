import React from 'react';

import { ContactCard } from './Contact.style';

const Contact = () => {

  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/olopeze/'
    },
    {
      name: 'Github',
      url: 'https://github.com/OLopezE'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100081211506994'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/oscarlopezescobar/'
    }
  ]

  return (
    <div>
      <h1>Get in contact with me</h1>
      <p>These are my socials</p>
      {socials.map(social => (
        <a href={social.url}>{social.name}</a>
      ))}
    </div>
  )
}

export default Contact