import {
  ContactContainer,
  ContactCard,
  ContactGrid,
  ContactTitle
} from './Contact.style';

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
    },
    {
      name: 'Email Me',
      url: 'mailto:olopeze@outlook.com'
    },
    {
      name: 'Call me',
      url: 'tel:+526145138752'
    }
  ]

  return (
    <ContactContainer>
      <ContactTitle>Get in contact with me</ContactTitle>
      <ContactGrid>
      {socials.map(social => <ContactCard href={social.url} target='_blank' >{social.name}</ContactCard>)}
      </ContactGrid>
    </ContactContainer>
  )
}

export default Contact