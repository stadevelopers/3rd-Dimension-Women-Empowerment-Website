import React from 'react'
import './Tour.css'

//Imopirted Images 
import tourImage1 from '../Assets/image.jpg'
import tourImage2 from '../Assets/image1.jpg'


const Tour = () => {
  return (
    <div className='tours container section'>
      <div className="secContainer" id='about'>
        <span className="secTitle">
          Who we are
        </span>

        <div className="tourContainer1">
            <div className="imgDiv">
                <img src={tourImage1}/>
            </div>
            <div className="tourInfo">
              <span className="tourTitle">
              The 3rd Dimension Movement is a transformative non-profit 
organization founded by Lerato Bangane, a passionate and visionary 
woman with a deep commitment to empowering and supporting 
women. The organization was established to provide a safe and 
nurturing space for women of all backgrounds to connect spiritually, 
mentally, financially, and socially. Through interactive sessions, 
shared experiences, and prayerful introspection, the 3rd Dimension
Movement aims to help women discover their unique purposes and 
inspire positive change in their families, communities, and society.

              </span>
            </div>
        </div>

        <div className="tourContainer2">
            
            <div className="tourInfo">
              <span className="tourTitle">
              <strong>Mission: </strong><br/>
Our mission is to empower women to embrace their individuality and find strength through unity. We aim to foster an environment where women can connect with their higher selves, explore their callings, and unleash their potential to create a meaningful impact on the world. <br/>
<strong> Vision:</strong> <br/>
Our vision is to see women from all walks of life empowered spiritually, mentally, financially, and socially. We envision a world where women stand together, supporting and uplifting each other, driving positive change in their lives and society. <br/>
              </span>
            </div>

            <div className="imgDiv">
                <img src={tourImage2}/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Tour