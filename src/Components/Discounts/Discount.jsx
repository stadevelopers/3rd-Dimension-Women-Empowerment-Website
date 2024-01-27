
import './Discount.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


//Imported Video
import imge from '../Assets/subs.jpg'

const Discount = () => {

  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_f384qn1', 'template_mknlx0i', form.current, 'BDT9orGNwYTf8nFO8')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div>
      <div className="discount section">
        <div className="secContainer">
          <img src={imge} />
          <div className="textDiv">
          <span className="title">
            Join our Team
          </span>
          <p>
          Subscribe if you want to receive emails regarding newsletters, marketing emails, and information regarding our events
          </p>

          <div className="input_btn flex">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Enter Your Email' name='user_name'/>
            <button type="submit" className='btn' > Subscribe</button>
          </form>     
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Discount