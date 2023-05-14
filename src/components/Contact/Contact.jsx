import React from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
    <div className='container' id='Contact'>
      <h1>[ Contact ]</h1>
      <div className='contact'>
        <p>Para obtener mas información sobre mi puedes escribirme al siguiente correo o por Linkedin</p>
        <p> <a href={"mailto: javiazagra12@gmail.com"}> javiazagra12@gmail.com</a> </p>
        <a href='https://www.linkedin.com/in/javier-azagra-garc%C3%ADa/'>Linkedin</a>
      </div>
    </div>
  )
};

export default Contact