import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TestimonialItem from './TestimonialItem';
import './testimonials.css'

const Testimonials = () => {

const reviews = [
    {
        name: 'Daniel Moka',
        description: 'Fresh Housekeeping are all wonderful! We have used them for many years in many different states.They are efficient, professional, and affordable. Thanks to all!',
        address: 'HouseKeeping',
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: 'Mary Willsom',
        description: 'I met the owner and was very impressed with her professionalism, openness when listening to my needs, and understanding of what I wanted. 10/10 would totally recommend!',
        address: 'Office Cleaning',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
        name: 'Steve Burns',
        description: 'I used them twice and will use them again. Extremely professional and excellent service.',
        address: 'Office Cleaning',
        img: 'https://www.landfood.ubc.ca/files/2018/04/will-valley-square-crop-300x300.jpg'
    },
    {
        name: 'Kevin Canlas',
        description: 'I switched to this company from another and its been a huge improvement. Consistent, automated scheduling makes it easy, always spotless. Highly recommend!',
        address: 'Building Maintaince',
        img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
        name: 'Sara Smith',
        description: 'Great customer service and fair prices. They could work on consistency though - some cleaners are definitely better than others!        ',
        address: 'Villa Housekeeping',
        img: 'https://thumbs.dreamstime.com/b/beautiful-business-woman-office-portrait-beautiful-business-woman-office-portrait-attractive-successful-female-worker-120539420.jpg'
    },
    {
        name: 'Gillian Howards',
        description: 'Staff was very professional and punctual. Expectations were exceeded in the cleaning! I would definitely recommend Fresh Housekeeping!',
        address: 'HouseKeeping',
        img: 'https://previews.123rf.com/images/citalliance/citalliance1403/citalliance140300321/39664168-portrait-of-smiling-modern-business-woman-in-office.jpg'
    },
]

const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true,
    responsive: {
        0: {
            items:1,
            dots:false,
            nav:false
        },
        600: {
            items:1,
            dots:false,
            nav:false
        },
        800: {
            items:2
        },
        1000: {
            items: 3
        }
    }}

  return (
    <div className='Testimonial'>
        <div className="testiWrapper">
            <div className='testiTitle'>
                OUR REVIEWS
            </div>
            <div className='testiPart'>
            <OwlCarousel id='CustomerReviews' className='testimonials'{...options} >
{ reviews.length===0 ?
            <div className="item">
            <FontAwesomeIcon className='TestiIcon' size='2x' icon={faQuoteLeft}></FontAwesomeIcon>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In molestiae, cupiditate adipisci dignissimos culpa suscipit iste amet rem debitis ducimus molestias cum quaerat porro blanditiis modi similique hic nesciunt odio! Quam, minima? Eum ipsam neque facere eligendi consequatur eveniet earum. Explicabo illo, quae enim cupiditate iste ex nulla, adipisci id.</p>
      <img className='TestiImg' src={process.env.PUBLIC_URL + "/images/asiangirl.jpg"} alt="Man with glasses" />
          <h5>Kim Possible</h5>
          <p className='testiSub'>Dental Tour</p>
            </div> :
            reviews.map(testimonialDetails => {
                return(
                    <TestimonialItem testimonialDetails={testimonialDetails} key={testimonialDetails.name} />
                )
            })

}
            </OwlCarousel>
            </div>
        </div>
    </div>
  )
}

export default Testimonials