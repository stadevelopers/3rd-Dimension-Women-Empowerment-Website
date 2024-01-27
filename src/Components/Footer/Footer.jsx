import React from 'react'
import './Footer.css'
import privacy from '../Assets/policy.pdf'


import {HiPhone} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="secContainer container">
        <div className="content grid">
          <div className="row">
            <div className="spanText">
              CONTACT US
            </div>
            
            <div className="contactDiv">
              <span className="flex">
                <HiPhone className='icon'/>
                <a href = "tel:27834539281" target='blank'>+27 83 453 9281</a>
              </span>

              <span className="flex">
                <MdEmail className='icon'/>
                <a href="mailto:info@3rd.org.za" target='blank'>info@3rd.org.za</a>
              </span>

              <span className="flex">
                <BsWhatsapp className='icon'/>
                <a href="https://wa.me/27834539281" target='blank'>+27 83 453 9281</a>
              </span>
            </div>
          </div>

          <div className="row">
            <div className="spanText">
              LATEST NEWS
            </div>

            <div className="singleNews">
              <span className="text">
              Subscribe to our letter
              </span>

              <p>
              Subscribe if you want to receive emails regarding newsletters, marketing emails, and information regarding our events
              </p>
            </div>

            <div className="singleNews">
              <span className="text">
              Donations
              </span>

              <p>
              3rd Dimension NPC<br/>
              Nedbank<br/>
              2012425569<br/>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="spanText">
              QUICKLINKS
            </div>
            <div className="footerLinks">
              <ul>
              <li><a href="https://www.instagram.com/3rddimensionmovement/?hl=en">Instagram</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100081299116655&mibextid=9R9pXO">Facebook</a></li>
              <li><a href="">LinkedIn</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="bottomDiv flex">
          <p>Developed And Designed by <a href="https://vundla.org.za">Vundla Group</a> </p>

          <div className="social flex">
            <FaFacebookF className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>

          <a href={privacy} target='blank'>Privacy Policy</a>
        </div>
      </div>

    </div>
  )
}

export default Footer