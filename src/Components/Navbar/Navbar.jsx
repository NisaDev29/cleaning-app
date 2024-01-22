import React, { useRef } from 'react'
import './navbar.css';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }
  return (
    <nav className="Navbar">
      <div className="navWrapper">
        <div className="navLeft">
          <span>FRESH CLEANING</span>
        </div>
        <div className="navRight" ref={navRef} >
                <HashLink to="#" smooth='true' className='navMenu'>Home</HashLink>
                <HashLink to='#services' smooth='true' className='navMenu'>Services</HashLink>
                <HashLink to='#contact' smooth='true' className='navMenu'>Contact Us</HashLink>
              <button className='navButton'>
                  <HashLink to='#contact'> Book Now</HashLink>
                </button>
              <button className='navBtn nav-close-btn'
              onClick={showNavbar}>
                <CloseIcon fontSize='medium'/>
              </button>
         </div>
         <button className='navBtn'
         onClick={showNavbar}>
         <MenuIcon fontSize='medium'/>
         </button>
      </div>
    </nav>
  )
}

export default Navbar