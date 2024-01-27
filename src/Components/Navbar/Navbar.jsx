import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'

//Imported Icons
import {AiFillCloseCircle} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {


  ///Display the Navbar 

  const [active, setActive] = useState('menuDiv')

  const showNavBar = ()=>{
    setActive('menuDiv activeNavbar')
  }

  ///unDisplay the Navbar

  const removeNavBar = ()=>{
    setActive('menuDiv ')
  }

  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <img src={logo} alt="" />
          <h3 className="logo">
            3rd Dimension
          </h3>
        </div>

       <div className= {active}>
          <ul className="menuLists">
            <li className="navItem">
              <a href="#" className="menuLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#about" onClick={removeNavBar} className="menuLink">About</a>
            </li>


            <li className="navItem">
              <a href="#gallery" onClick={removeNavBar} className="menuLink">Gallery</a>
            </li>

            <li className="navItem">
              <a href="#team" onClick={removeNavBar} className="menuLink">Our team</a>
            </li>

            <li className="navItem">
              <a href="#contact" onClick={removeNavBar} className="menuLink">Contact Us</a>
            </li>


           
          </ul>

          <div onClick={removeNavBar} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div> 

        <div className="socialIcons flex">
          <a href="https://www.facebook.com/profile.php?id=100081299116655&mibextid=9R9pXO"><BsFacebook className='icon'/></a>
          <a href=""><AiOutlineTwitter className='icon'/></a>
          <a href=""><AiFillYoutube className='icon'/></a>
          <a href='https://www.instagram.com/3rddimensionmovement/?hl=en'><AiFillInstagram className='icon' /></a>

        </div>

        <div onClick={showNavBar} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar