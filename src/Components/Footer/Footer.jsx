import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className='Footer'>
        <div className="footWrapper">
            <div className="footLeft">
                <p className='footTitle'>LINKS</p>
                
                <div className="footLinks">
                    <Link to="#" smooth>HOME</Link>
                    <Link to="#intro" smooth>ABOUT US</Link>
                    <Link to="#services" smooth>SERVICES</Link>
                    <Link to="#contact" smooth>CONTACT US</Link>
                </div>
            </div>
            <div className="footCenter">
                <p className='footTitle'>JOIN US</p>
                
                <div className="footLinks">
                    <p>Let your happiness be known to others</p>
                    <div className='footIcons'>
                    <FontAwesomeIcon icon={faFacebook} className='footIconFb' size='lg'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInstagram}  className='footIconInsta' size='lg'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faYoutube}  className='footIconYout' size='lg'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter} className='footIconTwi' size='lg'></FontAwesomeIcon>
                    </div>              
                    <p>Thank You!</p>  
                </div>
            </div>
            <div className="footRight">
                <p className='footTitle'>CONTACT US</p>
                <div className="footLinks" >
                    <p className='footOther'>Rruga Qemal Stafa</p>
                    <p className='footOther'>Tirane, 1020</p>
                    <p className='footOther'>+355 69-455-6908</p>
                    <p className='footOther'>freshcleaning@support.com</p>
                </div>
                </div>
        </div>
    </footer>
  )
}

export default Footer