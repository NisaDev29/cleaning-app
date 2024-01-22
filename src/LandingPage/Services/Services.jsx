import React from 'react'
import './services.css';


const Services = () => {
  return (
    <div id="services">
        <div className='servicesWrapper'>
            <div className="servicesTitle">
                <h5>OUR SERVICES</h5>

                <h1>Perfect Cleaniness without Effort</h1>
            </div>
            <div className="servicesTypes">
                <div className="service">
                    <div className='serviceImg'><img src={process.env.PUBLIC_URL + "/images/home.svg"} style={{maxWidth:"90px", height:"90px"}} alt="" /></div>
                    <h3>House Cleaning</h3>
                    <p>
                        You can book a one single house deep cleaning or schedule for regular clean ups according to your preferences.
                    </p>
                </div>
                <div className="service">
                <div className='serviceImg'><img src={process.env.PUBLIC_URL + "/images/office.svg"} style={{maxWidth:"90px", height:"90px"}} alt="" /></div>
                    <h3>Office Cleaning</h3>
                    <p>
                        We offer deep professional cleaning for offices and other business facilities. Once a month appointments are ours customers favorites. 
                    </p>
                </div>
                <div className="service">
                <div className='serviceImg'><img src={process.env.PUBLIC_URL + "/images/rental.svg"} style={{maxWidth:"90px", height:"90px"}} alt="" /></div>
                    <h3>Airbnb Rentals</h3>
                    <p>Our latest service include Airbnb rentals housekeeping. Get the best cleaning on a hourly rate. Fast and Convient!</p>
                </div>
                <div className="service">
                <div className='serviceImg'><img src={process.env.PUBLIC_URL + "/images/other.svg"} style={{maxWidth:"90px", height:"90px"}} alt="" /></div>
                    <h3>Other Cleaning</h3>
                    <p>We also do building maintaince, cleaning when moving in or out of apartments and other types depending on clients requirement.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services