
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact =() => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p6er0ob', 'template_tp2cowj', form.current, 'C0yL6XHjYD7rrdPQr')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    
    e.target.reset()
  };
  return (
    <div className="form-container" id="contact">
      <h1 className='secTitle'>Send a message to us</h1>

       <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder=" Name" required />
        <input type="email" name="email" placeholder=" Email" required/>
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder=" Message" rows="7" required></textarea>
        <button type="submit" className='btn'>Send Messsage</button>
      </form>
    </div>
  );
}

export default Contact;
