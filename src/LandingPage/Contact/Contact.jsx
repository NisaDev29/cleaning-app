import React from "react";
import "./contact.css";
import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Contact = () => {
  return (
    <div id="contact">
        <div className="contactWrapper">
            <div className="contactTitle">
              <p>CONTACT US</p> 
              <h2>BOOK WITH US AN APPOINTMENT NOW AND ENJOY A CLEAN HOUSE</h2>
            </div>
            <div className="contactPart">
                <div className="contactForm">
                  <h6>Message Us</h6>
                    <Form className='contactInputs'>
                        <div className="contactInput">
                          <div className="ctInputSub">
                            <label>Name*</label>
                            <input placeholder="Anisa" type="text" />
                          </div>
                          <div  className="ctInputSub">
                            <label>Surname*</label>
                            <input placeholder="Sulaj" type="text" />
                          </div>
                        </div>
                        <div className="contactInput">
                          <div className="ctInputSub">
                            <label>Email</label>
                            <input placeholder="anisasulaj111@hotmail.com" type="text" />
                          </div>
                          <div className="ctInputSub">
                            <label>Phone Number</label>
                            <input placeholder="069 58 76 750" type="text" />
                          </div>
                        </div>
                        <div className="ctInputSub">
                          <label>Subject</label>
                          <input placeholder="House Cleaning" type="text" />
                        </div>
                        <div className="ctInputSub">
                          <label>Message Us</label>
                          <textarea placeholder="I am interested in..." cols="" rows="5"></textarea>
                        </div>
                        <button type="button" className="ctButton">SUBMIT FORM</button>
                    </Form>
                </div>
                <div className="contactOther">
                  <div className="ctLocation">
                     <h6>Our Location</h6>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.4578513965175!2d19.818496940768075!3d41.32719486078189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310ffc27b939%3A0x91829d7013798f15!2sSkanderbeg%20Square!5e0!3m2!1sen!2s!4v1685045936370!5m2!1sen!2s"  allowFullScreen="" loading="lazy" title="MAP" referrerPolicy="no-referrer-when-downgrade">OUR LOCATION</iframe>
                  </div>
                  <div className="ctFAQ">
                    <h6>FAQ</h6>
                      <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0" >
                      <Accordion.Header>How do I contact you?</Accordion.Header>
                      <Accordion.Body>
                        You can write us a message in the contact form and we will get back at
                        you as soon as possible. Otherwise, you can directly call us or email
                        us.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>How does it work?</Accordion.Header>
                      <Accordion.Body>
                        Message us the type of property you want cleaned, how big is it and when
                        you do you want our services. We will get back to you as soon as
                        possible with the overall price and other details.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Do I need to be home during the cleaning?</Accordion.Header
                      >
                      <Accordion.Body>
                        No, you do not! It's completely your choice whether you would like to be
                        home during your appointment. If you prefer, you can just leave a key
                        and we'll take care of everything!
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header
                        >How do I cancel or reschedule a clean if I am sick or something comes
                        up?</Accordion.Header
                      >
                      <Accordion.Body>
                        We require 48 hours notice for reschedule or cancellations. There will
                        be a $45.00 charge for no notice cancellations and lockouts.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;