import React, {useEffect} from 'react'
import "./Home.css"

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className='home'>
         <div className="homeText">
          <span data-aos='fade-up' data-aos-duration='2000' className='spanText'>Women... Unleash your power to empower by sharing your journey.</span>

          <div data-aos='fade-up' data-aos-duration='4000' className="homeTitle">
            Trust <strong>Our Team</strong>
          </div>


          <div data-aos='fade-up' data-aos-duration='6000'className=""><a href="#about" className='btn'>Get In Touch</a></div>
         </div>

    </div>
  )
}

export default Home