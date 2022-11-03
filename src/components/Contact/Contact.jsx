import React from 'react'

const Contact = (props) => {
  return (
    <div className='contact'>
      <h1>[ Contact ]</h1>
      <form onSubmit={"hola"}>
          <label>
            <p>Name</p>
            <input type="text" name="name" />
          </label>
          
          <label>
            <p>Email</p>
            <input type="email" name="email" />
          </label>

          <label>
            <p>Phone</p>
            <input type="tel" name="name" />
          </label>

          <label>
            <p>Affair</p>
            <input type="text" name="affair" />
          </label>

          <label>
            <p>Message</p>
            <input type="text" name="message" />
          </label>
      </form>
    </div>
  )
};

export default Contact