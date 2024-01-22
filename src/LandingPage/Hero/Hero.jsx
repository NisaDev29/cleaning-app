import React from 'react'
import './hero.css'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='heroWrapper'>
        <div className='heroText'> 
        <img className='heroResponsive heroExtraImg' src={process.env.PUBLIC_URL + "/images/heroCleaning.gif"} alt="" />
          <sub style={{color:"blue"}}>#1 BEST CLEANING COMPANY IN THE COUNTRY</sub>
          <h1 className='htHeader'>Profesional Cleaning Services</h1>
          <p className='htSub'><DoneAllIcon style={{color:"blue"}}/> We bring all our own supplies & equipment to each job</p>
          <p className='htSub'><DoneAllIcon style={{color:"blue"}}/>  Highly trained, full-time employees (not sub-contractors)</p>
          <p className='htSub'><DoneAllIcon style={{color:"blue"}}/> Transparent pricing, with no hidden fees</p>
          <button type='submit' className='htButton'>
           <HashLink to='#contact'><ScheduleSendIcon/> Book a Cleaning Now</HashLink>
          </button>
        </div>
        <div className="heroImg">
          <img src={process.env.PUBLIC_URL + "/images/heroCleaning.gif"} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero