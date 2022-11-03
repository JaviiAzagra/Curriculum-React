import React from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
    <div className='container'>
      <h1>[ Contact ]</h1>
      <div className='contact'>
        <form>
            <label>
              <p>Name:</p>
              <input type="text" name="name" placeholder=' YourName' />
            </label>
            
            <label>
              <p>Email:</p>
              <input type="email" name="email" placeholder=' email@email.com' />
            </label>

            <label>
              <p>Phone:</p>
              <input type="number" name="name" placeholder=' Your Phone'/>
            </label>

            <label>
              <p>Subject:</p>
              <input type="text" name="affair" placeholder=' Subject'/>
            </label>

            <label>
              <p>Message:</p>
              <input className='message' type="text" name="message" placeholder=' Message'/>
            </label>
            <div className='button'>
            <input className='submit' type="submit" name="boton"/>
            </div>
        </form>
      </div>
    </div>
  )
};

export default Contact