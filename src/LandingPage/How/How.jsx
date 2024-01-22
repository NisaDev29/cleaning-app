import React from 'react'
import "./how.css";

const How = () => {
  return (
    <div className="How">
        <div className="howWrapper">
            <div className="howTitle">
                <h5>HOW IT WORKS?</h5>
                <h2 className='howMain'>BOOK OUR SERVICES IN 3 SIMPLE STEPS</h2>
            </div>
            <div className='howPart'>
              <div className="howText">
              <img className='howImg' src={process.env.PUBLIC_URL + "/images/howEvent.png"} alt="" />
                <h4>Choose Your Cleaning Service</h4>
                <p>Let us know what you would like cleaned and the most convient time for you.</p>
              </div>
              <div className="howText">
                <img className='howImg' src={process.env.PUBLIC_URL + "/images/howClean.png"} alt="" />
                <h4>We Clean Your Houses</h4>
                <p>Our team performs its magic.</p>
              </div>
              <div className="howText">
              <img className='howImg' src={process.env.PUBLIC_URL + "/images/howHome.png"} alt="" />
                <h4>Enjoy A Clean, Tidy Home</h4>
                <p>Now you just sit back and relax, while we ensure your home is spotless, top-to-bottom.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default How