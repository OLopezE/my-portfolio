import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Get in contact with me</h1>
      <p>These are my socials</p>
      <Link to='/'>Linkedin</Link>
      <Link to='/'>Github</Link>
    </div>
  )
}

export default Contact