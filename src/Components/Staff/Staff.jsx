import React from 'react'
import './Staff.css'
import img1 from '../Assets/1.jpg'

//Imported Images
import face1 from '../Assets/face1.jpg'
import face2 from '../Assets/face3.jpg'
import face3 from '../Assets/face4.jpg'

const Staff = () => {
  return (
    <div className='staff container section' id='team'>
      <div className="secContainer">
        <span className="secTitle">
          Different People - One Mission
        </span>

        <div className="staffContainer grid">
          <div className="singleStaff">
            <div className="imgDiv">
              <img src={face1}  />
            </div>

           
            <span className="name">
            Lerato Bangane
            </span>
            <span className="jobTitle" >
                Chairperson & Founder
            </span>
            <span className="contact">
                +27 83 453 9281
            </span>
          </div>

          <div className="singleStaff">
            <div className="imgDiv">
              <img src={face2}  />
            </div>

           
            <span className="name">
              Veronica Baba
            </span>
            <span className="jobTitle" >
              Director
            </span>
            
          </div>

          <div className="singleStaff">
            <div className="imgDiv">
              <img src={face3}  />
            </div>

           
            <span className="name">
            Minah Nkopane
            </span>
            <span className="jobTitle" >
            Treasure 
            </span>
            
          </div>
        </div>
      </div>

     
      <br></br>
      <div class="btm-container">
        <div class="images">
          <img src={img1}/>
        </div>
        <div class="text">
          <p>
          I am woman in my four-ties who was born and bred in Vaal (Sharpeville). I and my siblings, four sisters and two brothers, were raised in a family that is deeply rooted in Christianity and that has shaped my whole life. I have been married to a wonderful husband for 16 years. My passion for women stems from a lifetime of being exposed to the challenges of the women around me and the strength with which they can overcome every obstacle they stumble upon. I believe there is power and strength in standing together as women and empowering each other.

          </p>
          <br></br>
          <h3>-Our CEO & Founder</h3>
          <br></br>
        </div>
      </div>

      <hr className="line"></hr>
    </div>
  )
}

export default Staff