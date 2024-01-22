import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './testimonials.css'

const TestimonialItem = ({testimonialDetails}) => {
    const {name, description, address, img} = testimonialDetails
  return (
    <>
    <div className="item">
            <FontAwesomeIcon className='TestiIcon' size='xl' icon={faQuoteLeft}/>
      <p className='testiDesc'>{description}</p>
      <img className='TestiImg' src={img} style={{width:"50px", height:"50px" }} alt="Man with glasses" />
          <h5>{name}</h5>
          <p className='testiSub'>{address}</p>
            </div>
            </>
  )
}

export default TestimonialItem