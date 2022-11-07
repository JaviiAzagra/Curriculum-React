import React from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
    <div className='container'>
      <h1>[ Contact ]</h1>
      <div className='contact'>
        <p>If you want to know more about me I leave you the contact information below.</p>
        <p> <a href={"mailto: javiazagra12@gmail.com"}> javiazagra12@gmail.com</a> </p>
        <a href='https://www.linkedin.com/in/javier-azagra-garc%C3%ADa/'>Linkedin</a>
      </div>
    </div>
  )
};

export default Contact