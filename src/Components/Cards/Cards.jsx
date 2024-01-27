import React from 'react'
import './Cards.css'


//Imported Images 
import cardImage1 from '../Assets/card2.jpg'
import cardImage2 from '../Assets/card1.jpg'
import cardImage3 from '../Assets/card3.jpg'

//Imported Icons 
import {AiOutlineSwapRight} from 'react-icons/ai'

const Cards = () => {
  return (
    <div className='cards'>
      <div className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage1}  />
          </div>
          <h4 className="textDiv">
             Empowerment
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage2}  />
          </div>
          <h4 className="textDiv">
             Unity
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage3}  />
          </div>
          <h4 className="textDiv">
             Spiritual Connection
          </h4>
        </div>
        
      </div>
    </div>
  )
}

export default Cards