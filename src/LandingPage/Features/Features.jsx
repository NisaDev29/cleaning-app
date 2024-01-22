import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./features.css";
import { faAward, faShieldAlt, faWallet } from '@fortawesome/free-solid-svg-icons';
import { faClock, faMessage, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import SendIcon from '@mui/icons-material/Send';
import { HashLink as Link } from 'react-router-hash-link';
const Features = () => {
  return (
    <div className="Features">
        <div className="featuresWrapper">
            <div className="featuresTitle">
                WHY PICK US
            </div>
            <div className="featuresPart">
                <div className="featuresLeft">
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='xl' icon={faClock}></FontAwesomeIcon>
                        <h5>Saves You Time</h5>
                    </div>
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='xl' icon={faShieldAlt}></FontAwesomeIcon>
                        <h5>Safety First</h5>
                    </div>
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='xl' icon={faAward}></FontAwesomeIcon>
                        <h5>Only the Best Quality</h5>
                    </div>
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='xl' icon={faUserCircle}></FontAwesomeIcon>
                        <h5>Easy to Get Help</h5>
                    </div>
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='xl' icon={faMessage}></FontAwesomeIcon>
                        <h5>Seamless Communication</h5>
                    </div>
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='xl' icon={faWallet}></FontAwesomeIcon>
                        <h5>Cash Free Payment</h5>
                    </div>
                </div>
                <div className="featuresRight">
                    <img src={process.env.PUBLIC_URL + '/images/featureImg.png'}  alt="An Office Table" />
                </div>
            </div>
            <button className='featureButton'>
                <Link to="#contact"> <SendIcon/> Book An Appointment Now</Link>
                </button>
        </div>
    </div>
  )
}

export default Features